import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Head from 'next/head'
import About from '../components/About'
import ProgressBar from '../components/ProgressBar'
import Follow from '@/components/Follow'
import Sponsors from '@/components/Sponsors'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>GDSC ABESIT</title>
      </Head>
      <ProgressBar />
      <Navbar />
      <main className={`overflow-hidden bg-white dark:bg-neutral-950 ${inter.className}`}>

        <Hero />
        <About />
        <Sponsors/>
        <Contact />
        <Follow />
        <Footer />

      </main>
    </>
  )
}
