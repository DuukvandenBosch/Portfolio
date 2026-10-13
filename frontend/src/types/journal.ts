export type CurrentProjectStatus = 'In Progress' | 'On Hold' | 'Completed'

export interface CurrentProject {
  id: string
  name: string
  description: string
  status: CurrentProjectStatus
  objective: string
  accomplishments: string[]
  nextSteps: string[]
  technologies: string[]
  updatedAt: string
  repositoryUrl?: string
}

export interface WorkLogEntry {
  id: string
  date: string
  title?: string
  summary?: string
  project: string
  relatedSprint?: string
  startTime?: string
  endTime?: string
  durationMinutes?: number
  tasks: string[]
  problemsSolved: string[]
  technologies: string[]
  context?: string
  goal?: string
  approach?: string
  implementation?: string
  challenges?: string[]
  decisions?: string[]
  result?: string
  learned?: string
  reflection?: string
  nextSteps?: string[]
  images?: JournalImage[]
  links?: Array<{ label: string; url: string }>
  placeholder?: boolean
}

export interface SprintArticle {
  slug: string
  number: number
  title: string
  startDate: string
  endDate: string
  summary: string
  goal: string
  plannedWork: string[]
  completedWork: string[]
  postponedWork: string[]
  designProcess?: string
  implementationDetails?: string
  challenges: string[]
  decisions: string[]
  lessons: string[]
  improvements: string[]
  nextGoals: string[]
  technologies: string[]
  relatedLinks: Array<{ label: string; url: string }>
  relatedWorkLogIds?: string[]
  relatedProjectIds?: string[]
  images?: JournalImage[]
  placeholder?: boolean
}

export interface JournalImage {
  src: string
  alt: string
  caption?: string
  description?: string
  group?: string
}

export type GitPlatform = 'GitHub' | 'GitLab'

export interface GitCommit {
  id: string
  message: string
  repository: string
  repositoryUrl: string
  date: string
  url: string
  platform: GitPlatform
  author?: string
}
