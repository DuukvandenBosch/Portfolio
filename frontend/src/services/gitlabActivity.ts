import { siteConfig } from '../config/site'
import type { GitCommit } from '../types/journal'

interface GitlabProject {
  id: number
  name: string
  web_url: string
}
interface GitlabCommit {
  id: string
  title: string
  message?: string
  web_url: string
  committed_date?: string
  author_name?: string
}

export async function fetchGitlabCommits(): Promise<GitCommit[]> {
  const userResponse = await fetch(
    `${siteConfig.gitlabBaseUrl}/api/v4/users/${encodeURIComponent(siteConfig.gitlabUsername)}/projects?per_page=20&page=1&order_by=last_activity_at&sort=desc&simple=true`,
  )
  if (!userResponse.ok) throw new Error(`GitLab projects returned ${userResponse.status}`)
  const projects = (await userResponse.json()) as GitlabProject[]
  const responses = await Promise.all(
    projects.slice(0, 8).map(async (project) => {
      const response = await fetch(
        `${siteConfig.gitlabBaseUrl}/api/v4/projects/${project.id}/repository/commits?per_page=10&page=1`,
      )
      if (!response.ok) throw new Error(`GitLab commits returned ${response.status}`)
      return { project, commits: (await response.json()) as GitlabCommit[] }
    }),
  )
  return responses.flatMap(({ project, commits }) =>
    commits.map((commit) => ({
      id: `gitlab-${commit.id}`,
      message: (commit.message ?? commit.title).split('\n')[0],
      repository: project.name,
      repositoryUrl: project.web_url,
      date: commit.committed_date ?? '',
      url: commit.web_url,
      platform: 'GitLab' as const,
      author: commit.author_name,
    })),
  )
}
