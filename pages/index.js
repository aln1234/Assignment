import Head from 'next/head'
import Boxes from '../components/Boxes'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Latest from '../components/Latest'
import Progressbar from '../components/Progressbar'
import Sales from '../components/Sales'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Demo App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="../fonts/Steelflight.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>


        <Header/>
        <Boxes/>
        <Sales/>
        <Latest/>
        <Progressbar/>
        <Footer/>
  

      </div>



  )
}
