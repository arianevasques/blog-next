import Image from 'next/image'
import Head from 'next/head';

const Hello = () => (
  <>
    <Head>
      <title>Hello there :: My Blog</title>
      <meta property="og:title" content="Hello there :: My Blog" />
    </Head>
  <article>
    <h1>Hello There!</h1>
    <Image
      src="/post/hello-there/balao.jpeg"
      width={640}
      height={427}
      alt={" "}
    />
    <p>Ola, aqui vai a legenda.</p>

  </article>
  </>
)


export default Hello