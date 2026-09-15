import { BsGithub, BsTwitter } from 'react-icons/bs'

export const siteMetadata = {
  title: 'My Blog',
  author: 'Blog Author',
  email: 'hello@example.com',
  headerTitle: 'My Blog',
  description: 'A blog about software development and other things.',
  language: 'en-US',
  locale: 'en-US',
  theme: 'system',
  siteUrl: 'https://example.com',
  siteRepo: 'https://github.com/aserenaa/idkan.dev',
  siteLogo: '/static/images/logo.png',
  socialMediaBanner: 'https://example.com/social-media-banner.png',
  twitterHandle: '@username',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/username',
      icon: <BsGithub size='24' />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/username',
      icon: <BsTwitter size='24' />
    }
  ],
  comment: {
    provider: 'giscus',
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark_dimmed',
      themeURL: ''
    }
  }
}
