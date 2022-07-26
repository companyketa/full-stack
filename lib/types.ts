import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type GrayMatter = {
  date: string | null;
  slug: string;
  [key: string]: any;
}

export type Post = {
  html: MDXRemoteSerializeResult<Record<string, unknown>>;
  toc: any;
  frontMatter: GrayMatter;
}

export type SocialIconKind = 'email' | 'github' | 'youtube' | 'twitter' | 'instagram';