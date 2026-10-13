import { fetchGithubCommits } from './githubActivity'
import { fetchGitlabCommits } from './gitlabActivity'
import type { GitCommit } from '../types/journal'

const cacheKey = 'duuk-portfolio-activity-v1'
const cacheDuration = 1000 * 60 * 10

function readCache(): GitCommit[] | null {
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey) ?? 'null') as { at: number; commits: GitCommit[] } | null
    return cached && Date.now() - cached.at < cacheDuration ? cached.commits : null
  } catch {
    return null
  }
}
function writeCache(commits: GitCommit[]): void {
  try {
    localStorage.setItem(cacheKey, JSON.stringify({ at: Date.now(), commits }))
  } catch {
    /* storage may be disabled */
  }
}

export interface ActivityResult {
  commits: GitCommit[]
  errors: string[]
  fromCache: boolean
}

export async function fetchActivity(): Promise<ActivityResult> {
  const cached = readCache()
  if (cached) return { commits: cached, errors: [], fromCache: true }
  const results = await Promise.allSettled([fetchGithubCommits(), fetchGitlabCommits()])
  const commits = results.flatMap((result) => (result.status === 'fulfilled' ? result.value : []))
  const errors = results.flatMap((result) =>
    result.status === 'rejected'
      ? [result.reason instanceof Error ? result.reason.message : 'A source was unavailable.']
      : [],
  )
  const normalized = commits
    .filter((commit, index, all) => all.findIndex((item) => item.id === commit.id) === index)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  if (normalized.length) writeCache(normalized)
  return { commits: normalized, errors, fromCache: false }
}
