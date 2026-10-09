import { siteConfig } from '../config/site'
import type { Project } from '../types/project'
interface GithubRepository {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  topics?: string[]
  updated_at: string
  stargazers_count: number
  fork: boolean
}
export async function fetchGithubProjects(): Promise<Project[]> {
  const projects: Project[] = []
  for (let page = 1; page <= 3; page += 1) {
    const response = await fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100&page=${page}&sort=updated`,
    )
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`)
    const repositories = (await response.json()) as GithubRepository[]
    projects.push(
      ...repositories
        .filter((repo) => !repo.fork)
        .map((repo) => ({
          id: `github-${repo.id}`,
          name: repo.name,
          description: repo.description ?? '',
          url: repo.html_url,
          source: 'GitHub' as const,
          language: repo.language ?? undefined,
          topics: repo.topics ?? [],
          updatedAt: repo.updated_at,
          stars: repo.stargazers_count,
        })),
    )
    if (repositories.length < 100) break
  }
  return projects
}
