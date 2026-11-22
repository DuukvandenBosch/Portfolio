export type ProjectSource = 'GitHub' | 'GitLab' | 'Private School'
export interface Project {
  id: string
  name: string
  description: string
  url?: string
  liveUrl?: string
  source: ProjectSource
  language?: string
  topics: string[]
  updatedAt?: string
  stars?: number
  private?: boolean
  privateNote?: string
  featured?: FeaturedProject
}
export interface FeaturedProject {
  intro?: string
  highlights?: string[]
  technologies?: string[]
}
