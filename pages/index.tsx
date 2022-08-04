import type { NextPage } from 'next'
import Typewriter from 'typewriter-effect'
import BlogPostCard from '@/components/BlogPostCard'
import Image from 'next/future/image'
import CustomLink from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const Home: NextPage = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description="Building software to solve problems. Writing about tech and sharing my learnings about building services on the web."
      />
      <div className="h-full">
        <header className="flex flex-col sm:flex-row sm:flex-row-reverse gap-8">
          <div className="sm:mb-auto">
            <Image
              alt="John Braat"
              height={130}
              width={130}
              src="/static/img/avatar.webp"
              sizes="30vw"
              priority
              className="rounded-full grayscale hover:grayscale-0 transition-all ease-in-out duration-500 cursor-heart"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                John Braat
              </h1>
              <h2 className="text-neutral-800 dark:text-neutral-200 mb-4 text-lg font-mono">
                <Typewriter
                  options={{
                    strings: ['Developer', 'Creator', 'Traveler', 'Learner', 'Striving to be better than yesterday'],
                    autoStart: true,
                    loop: true,
                    cursor: '&#x258C;',
                    cursorClassName: 'text-sky-600 dark:text-sky-500 ml-0.5'
                  }}
                />
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-16 font-mono">
                Building software to solve problems. Self improvement nerd. Sharing my learnings about building products and services on the web.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-14">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Read my stuff
          </h3>
          <div className="flex flex-col sm:flex-row gap-7 justify-between">
            <BlogPostCard
              title="A really cool post about something I care"
              slug="style-guides-component-libraries-design-systems"
            />
            <BlogPostCard
              title="A really cool post about something I care"
              slug="rust"
            />
            <BlogPostCard
              title="A really cool post about something I care"
              slug="react-state-management"
            />
          </div>
          <div className="flex items-center text-neutral-500 py-8">
            <CustomLink
              href="/blog"
              prefetch={false}
              className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-all ease-in-out"
            >
              All posts &rarr;
            </CustomLink>
          </div>
        </section>

        <section className="my-14 border border-purple-500 py-24">
          <div>
            Newsletter sign up
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
