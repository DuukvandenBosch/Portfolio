export type ProjectSource = 'GitHub' | 'GitLab'
export interface Project {
  id: string
  name: string
  description: string
  url: string
  source: ProjectSource
  language?: string
  topics: string[]
  updatedAt?: string
  stars?: number
  featured?: FeaturedProject
}
export interface FeaturedProject {
  intro?: string
  highlights?: string[]
  technologies?: string[]
}
