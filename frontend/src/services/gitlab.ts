import { siteConfig } from '../config/site'
import type { Project } from '../types/project'
interface GitlabProject {
  id: number
  name: string
  web_url: string
  description: string | null
  topics?: string[]
  tag_list?: string[]
  last_activity_at?: string
  star_count?: number
  archived?: boolean
}
export async function fetchGitlabProjects(): Promise<Project[]> {
  const projects: Project[] = []
  for (let page = 1; page <= 5; page += 1) {
    const encodedUser = encodeURIComponent(siteConfig.gitlabUsername)
    const response = await fetch(
      `${siteConfig.gitlabBaseUrl}/api/v4/users/${encodedUser}/projects?per_page=100&page=${page}&order_by=last_activity_at&sort=desc&simple=true`,
    )
    if (!response.ok) throw new Error(`GitLab returned ${response.status}`)
    const repositories = (await response.json()) as GitlabProject[]
    projects.push(
      ...repositories
        .filter((repo) => !repo.archived)
        .map((repo) => ({
          id: `gitlab-${repo.id}`,
          name: repo.name,
          description: repo.description ?? '',
          url: repo.web_url,
          source: 'GitLab' as const,
          topics: repo.topics ?? repo.tag_list ?? [],
          updatedAt: repo.last_activity_at,
          stars: repo.star_count,
        })),
    )
    if (repositories.length < 100) break
  }
  return projects
}
