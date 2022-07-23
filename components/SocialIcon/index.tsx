import React from 'react'
import Email from '@/components/SocialIcon/Email'
import Github from '@/components/SocialIcon/Github'
import Twitter from '@/components/SocialIcon/Twitter'
import Instagram from '@/components/SocialIcon/Instagram'
import Youtube from '@/components/SocialIcon/Youtube'
import { SocialIconKind } from '@/lib/types'

// Icons taken from: https://simpleicons.org/

const components = {
  email: Email,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube
}



type Props = {
  kind: SocialIconKind;
  href: string;
  /** Tailwind units see: https://tailwindcss.com/docs/width */
  size?: number;
}

export default function SocialIcon({ kind, href, size = 6 }: Props) {
  if (kind === 'email' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
    throw Error('Please provide a valid email address')

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}