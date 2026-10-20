export const siteConfig = {
  name: 'Duuk van den Bosch',
  title: 'Duuk van den Bosch — Software Engineering',
  description: 'Software Engineering student building useful, maintainable software.',
  githubUsername: 'DuukvandenBosch',
  githubUrl: 'https://github.com/DuukvandenBosch',
  gitlabBaseUrl: 'https://gitlab.fdmci.hva.nl',
  gitlabUsername: 'boschdp',
  gitlabUrl: 'https://gitlab.fdmci.hva.nl/boschdp',
  email: 'duukvandenbosch@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/duukvandenbosch',
} as const

export type SocialIcon = 'mail' | 'linkedin' | 'github' | 'gitlab'

export interface SocialLink {
  label: string
  href: string
  icon: SocialIcon
  external?: boolean
}

const configuredSocialLinks: SocialLink[] = [
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: 'mail' },
  { label: 'LinkedIn', href: siteConfig.linkedinUrl, icon: 'linkedin', external: true },
  { label: 'GitHub', href: siteConfig.githubUrl, icon: 'github', external: true },
  { label: 'GitLab', href: siteConfig.gitlabUrl, icon: 'gitlab', external: true },
]

export const socialLinks = configuredSocialLinks.filter((link) => Boolean(link.href))
