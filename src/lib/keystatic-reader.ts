import { createReader } from '@keystatic/core/reader'
import { createGitHubReader } from '@keystatic/core/reader/github'
import config from '../../keystatic.config'

const isGithub = process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND === 'github'

export const reader = isGithub
  ? createGitHubReader(config, {
      repo: 'leaseibel/colibrille',
      token: process.env.KEYSTATIC_GITHUB_TOKEN,
    })
  : createReader(process.cwd(), config)
