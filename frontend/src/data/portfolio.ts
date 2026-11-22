import type { FeaturedProject } from '../types/project'

export interface ProjectCuration extends FeaturedProject {
  include?: boolean
  order?: number
}

/**
 * Optional public-repository curation. When populated, only listed URLs are shown.
 * Leave empty to show all eligible public repositories from the configured profiles.
 */
export const publicProjectCuration: Record<string, ProjectCuration> = {}

export const skills = [
  'Java',
  'Spring Boot',
  'PHP',
  'C#',
  'JavaScript',
  'TypeScript',
  'Vue.js',
  'SQL',
  'REST APIs',
  'Laravel',
  'Docker',
  'CI/CD',
  'Git',
  'Linux',
]
