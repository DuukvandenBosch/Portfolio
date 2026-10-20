import { siteConfig } from '../config/site'
import type { GitCommit } from '../types/journal'

interface GithubEvent {
  id: string
  type: string
  created_at: string
  actor?: { login?: string }
  repo?: { name: string }
  payload?: { commits?: Array<{ sha: string; message: string; url?: string }> }
}

export async function fetchGithubCommits(): Promise<GitCommit[]> {
  const response = await fetch(`https://api.github.com/users/${siteConfig.githubUsername}/events/public?per_page=100`)
  if (!response.ok) throw new Error(`GitHub activity returned ${response.status}`)
  const events = (await response.json()) as GithubEvent[]
  return events.flatMap((event) =>
    event.type === 'PushEvent' && event.payload?.commits && event.repo
      ? event.payload.commits.map((commit) => ({
          id: `github-${event.id}-${commit.sha}`,
          message: commit.message.split('\n')[0],
          repository: event.repo?.name ?? 'Unknown repository',
          repositoryUrl: `https://github.com/${event.repo?.name}`,
          date: event.created_at,
          url: commit.url ?? `https://github.com/${event.repo?.name}/commit/${commit.sha}`,
          platform: 'GitHub' as const,
          author: event.actor?.login,
        }))
      : [],
  )
}
