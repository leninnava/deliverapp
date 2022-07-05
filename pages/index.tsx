import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <Head>
        <title>DeliverApp</title>
        <meta name="description" content="A delivery app!" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className='bg-slate-200 rounded-lg p-6'>
        <h1 className='text-7xl text-slate-800 hover:text-slate-600 transition-colors'>
          Welcome to DeliverApp!
        </h1>
      </main>
    </div>
  )
}

export default Home
