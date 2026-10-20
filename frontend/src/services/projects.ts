import { featuredProjects } from '../data/portfolio'
import { fetchGithubProjects } from './github'
import { fetchGitlabProjects } from './gitlab'
import type { Project } from '../types/project'
const cacheKey = 'duuk-portfolio-projects-v1'
const cacheDuration = 1000 * 60 * 15
function decorate(projects: Project[]): Project[] {
  return projects.map((project) => ({ ...project, featured: featuredProjects[project.url] }))
}
function readCache(): Project[] | null {
  try {
    const saved = JSON.parse(localStorage.getItem(cacheKey) ?? 'null') as { at: number; projects: Project[] } | null
    return saved && Date.now() - saved.at < cacheDuration ? saved.projects : null
  } catch {
    return null
  }
}
function writeCache(projects: Project[]): void {
  try {
    localStorage.setItem(cacheKey, JSON.stringify({ at: Date.now(), projects }))
  } catch {
    /* storage can be disabled */
  }
}
export interface ProjectResult {
  projects: Project[]
  errors: string[]
  fromCache: boolean
}
export async function fetchProjects(): Promise<ProjectResult> {
  const cached = readCache()
  if (cached) return { projects: cached, errors: [], fromCache: true }
  const results = await Promise.allSettled([fetchGithubProjects(), fetchGitlabProjects()])
  const projects = results.flatMap((result) => (result.status === 'fulfilled' ? result.value : []))
  const errors = results.flatMap((result) =>
    result.status === 'rejected'
      ? [result.reason instanceof Error ? result.reason.message : 'A repository source was unavailable.']
      : [],
  )
  const normalized = decorate(
    projects.filter((project, index, all) => all.findIndex((item) => item.url === project.url) === index),
  )
  if (normalized.length) writeCache(normalized)
  return { projects: normalized, errors, fromCache: false }
}
