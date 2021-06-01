import Head from 'next/head'
import Image from 'next/image'
import FeatureWithSide from "../components/FeatureWithSide"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hate Crime Tracker    </title>
        <link rel="icon" href="/asiangirl.png" />
      </Head>


      <Nav></Nav>
      <FeatureWithSide></FeatureWithSide>
      <Newsletter></Newsletter>
      <Footer></Footer>

    </div>
  )
}
