import { privateSchoolProjects } from '../data/privateProjects'
import { publicProjectCuration } from '../data/portfolio'
import { fetchGithubProjects } from './github'
import { fetchGitlabProjects } from './gitlab'
import type { Project } from '../types/project'
const cacheKey = 'duuk-portfolio-projects-v2'
const cacheDuration = 1000 * 60 * 15
function decorate(projects: Project[]): Project[] {
  const hasCuration = Object.keys(publicProjectCuration).length > 0
  return projects
    .map((project) => ({ ...project, featured: project.url ? publicProjectCuration[project.url] : undefined }))
    .filter((project) => {
      const rule = project.url ? publicProjectCuration[project.url] : undefined
      return project.private || !hasCuration || Boolean(rule && rule.include !== false)
    })
    .sort((a, b) => {
      const aOrder = a.url ? publicProjectCuration[a.url]?.order ?? Number.MAX_SAFE_INTEGER : Number.MAX_SAFE_INTEGER
      const bOrder = b.url ? publicProjectCuration[b.url]?.order ?? Number.MAX_SAFE_INTEGER : Number.MAX_SAFE_INTEGER
      return aOrder - bOrder || Date.parse(b.updatedAt ?? '') - Date.parse(a.updatedAt ?? '')
    })
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
  const publicProjects = results.flatMap((result) => (result.status === 'fulfilled' ? result.value : []))
  const errors = results.flatMap((result) =>
    result.status === 'rejected'
      ? [result.reason instanceof Error ? result.reason.message : 'A repository source was unavailable.']
      : [],
  )
  const seen = new Set<string>()
  const publicProjectsWithoutDuplicates = publicProjects.filter((project) => {
    const key = `${project.name.toLowerCase().replace(/[^a-z0-9]+/g, '')}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
  const privateNames = new Set(privateSchoolProjects.map((project) => project.name.toLowerCase().replace(/[^a-z0-9]+/g, '')))
  const normalized = [...privateSchoolProjects, ...decorate(publicProjectsWithoutDuplicates).filter((project) => !privateNames.has(project.name.toLowerCase().replace(/[^a-z0-9]+/g, '')))]
  if (normalized.length) writeCache(normalized)
  return { projects: normalized, errors, fromCache: false }
}
