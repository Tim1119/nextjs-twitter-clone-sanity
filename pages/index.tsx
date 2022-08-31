import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from "../components/Sidebar"; 
import Widgets from "../components/Widgets";
import Feed from "../components/Feed";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-10 lg:max-w-6xl mx-auto max-h-screen overflow-hidden ' >
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
