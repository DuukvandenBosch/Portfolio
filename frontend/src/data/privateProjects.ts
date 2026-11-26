import type { Project } from '../types/project'

/**
 * Projects that cannot be retrieved from the public school GitLab profile.
 * Keep these intentionally small and add only projects that should be showcased.
 */
export const privateSchoolProjects: Project[] = [
  {
    id: 'private-genai-exposed',
    name: 'GenAI Exposed',
    description:
      'An experimental conversational AI concept exploring how systems turn personal input into assumptions about a visitor.',
    source: 'Private School',
    topics: ['Generative AI', 'Speech Recognition', 'Privacy by Design'],
    private: true,
    privateNote: 'Developed as part of my studies at the Amsterdam University of Applied Sciences.',
    updatedAt: '2026-10-06',
  },
]
