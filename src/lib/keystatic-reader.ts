import { createReader } from '@keystatic/core/reader'
import { createGitHubReader } from '@keystatic/core/reader/github'
import config from '../../keystatic.config'

const isGithub = process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND === 'github'

export const reader = isGithub
  ? createGitHubReader(config, {
      repo: 'leaseibel/colibrille',
      // Read content from the branch being deployed, not from the repo default
      // branch. Without a ref, Keystatic's GitHub reader falls back to main, so
      // a preview deployment renders main's content and any branch that adds
      // content looks like it did nothing.
      // Vercel sets VERCEL_GIT_COMMIT_REF to the deployed branch, which is main
      // on production, so production behaviour is unchanged. If the variable is
      // ever missing, ref is undefined and we fall back to the previous
      // behaviour rather than breaking the build.
      ref: process.env.VERCEL_GIT_COMMIT_REF,
      token: process.env.KEYSTATIC_GITHUB_TOKEN,
    })
  : createReader(process.cwd(), config)
