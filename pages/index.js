import { MDXSimpleRenderer } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getFileBySlug } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const homeContent = await getFileBySlug('home', ['default'])
  return { props: { homeContent } }
}
export default function Home({ homeContent }) {
  const { mdxSource, frontMatter } = homeContent
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mx-auto">
        <div className="max-w-2xl px-4 mx-auto sm:px-6 xl:max-w-2xl xl:px-0">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Designer for digital products
            </h1>
            <div>
              <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                <div className="pt-8 pb-8 prose prose-dark max-w-none xl:col-span-2">
                  <MDXSimpleRenderer mdxSource={mdxSource} frontMatter={frontMatter} />
                  <p className="text-gray-500 prose-sm">
                    Last update on 7 September 2021. The now page is inspired by{' '}
                    <a href="https://nownownow.com/about">Nownownow</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
