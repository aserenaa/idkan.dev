import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { Image, TOCInline, Link, Pre } from '../index'
import ListLayout from '../../layouts/ListLayout'
import PostLayout from '../../layouts/PostLayout'
import SimpleLayout from '../../layouts/SimpleLayout'

// Statically mapped so the bundler can resolve every layout at build time
const Layouts = {
  ListLayout,
  PostLayout,
  SimpleLayout
}

export const MDXComponents = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = Layouts[layout] ?? PostLayout
    return <Layout {...rest} />
  }
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
