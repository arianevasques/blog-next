import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { getPostList } from '@shared/util';
import Header from '@components/header';
import Navigation from '@components/navigation';
import Link from 'next/link';


type PostList = string[]

function Home({ posts }:InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Navigation />
        <Header />
        {posts.length > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                <Link href={`post/${slug}`}>
                <a>
                  {slug.replace(/-/g, ' ')}
                </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
export const getStaticProps = async () => {
  const posts:PostList = getPostList()

  return {
    props: {
      posts
    }
  }
}
export default Home
