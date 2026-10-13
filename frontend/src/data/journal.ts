import { siteConfig } from '../config/site'
import type { CurrentProject, SprintArticle, WorkLogEntry } from '../types/journal'

export const currentProjects: CurrentProject[] = [
  {
    id: 'portfolio-workspace',
    name: 'Portfolio workspace',
    description: 'A living portfolio for documenting software projects, experiments, and development practice.',
    status: 'In Progress',
    objective: 'Keep the portfolio useful as a place to explore work, process, and repository activity.',
    accomplishments: [
      'Added live repository browsing from GitHub and HvA GitLab.',
      'Established an editorial, dark technical visual system.',
    ],
    nextSteps: [
      'Replace example journal content with personal entries.',
      'Continue curating featured repositories and project notes.',
    ],
    technologies: ['Vue', 'TypeScript', 'Vite', 'REST APIs'],
    updatedAt: '2026-10-13',
    repositoryUrl: `${siteConfig.githubUrl}/Portfolio`,
  },
]

export const workLogEntries: WorkLogEntry[] = [
  {
    id: 'example-work-log',
    date: '2026-10-13',
    title: 'Example development-log entry',
    summary: 'A sample structure for documenting how a change was approached, not only what was changed.',
    project: 'Portfolio workspace',
    relatedSprint: 'example-sprint-01',
    tasks: ['Example entry — replace this with a real development session.'],
    problemsSolved: [],
    technologies: ['Vue', 'TypeScript'],
    context: 'Sample content: explain the situation that made this work necessary.',
    goal: 'Sample content: describe the result you wanted from this session.',
    approach:
      'Sample content: describe alternatives, sketches, diagrams, prototypes, or planning considered before implementation.',
    implementation:
      'Sample content: explain the code and technical changes in enough detail for another developer to follow.',
    challenges: ['Sample content: record an obstacle and how it was investigated.'],
    decisions: ['Sample content: record an important decision and why it was selected.'],
    result: 'Sample content: compare the result with the original goal.',
    learned: 'Use this centralized file to publish a read-only work-log entry.',
    reflection: 'Sample content: explain what you would improve in a future iteration.',
    nextSteps: ['Replace this example with a real entry and add visual evidence when useful.'],
    placeholder: true,
  },
]

export const sprintArticles: SprintArticle[] = [
  {
    slug: 'example-sprint-01',
    number: 1,
    title: 'Example sprint journal',
    startDate: '2026-10-06',
    endDate: '2026-10-13',
    summary: 'A clearly labelled structure for documenting a completed sprint. Replace this example with real notes.',
    goal: 'Example content only — define the outcome this sprint was intended to produce.',
    plannedWork: ['Add the sprint goal and planned tasks here.'],
    completedWork: ['Replace this bullet with completed work.'],
    postponedWork: ['Record work that moved to a later sprint.'],
    designProcess:
      'Sample content: describe the design process, sketches, alternatives, and feedback that shaped the work.',
    implementationDetails:
      'Sample content: document the implementation details and the reasoning behind the structure.',
    challenges: ['Describe a real technical challenge and the approach taken.'],
    decisions: ['Explain an important technical decision and why it was made.'],
    lessons: ['Capture what the sprint taught you.'],
    improvements: ['Note what you would change next time.'],
    nextGoals: ['Define the next sprint goal.'],
    technologies: ['Vue', 'TypeScript'],
    relatedLinks: [{ label: 'GitHub profile', url: siteConfig.githubUrl }],
    relatedWorkLogIds: ['example-work-log'],
    relatedProjectIds: ['portfolio-workspace'],
    placeholder: true,
  },
]
