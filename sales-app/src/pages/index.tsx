import Head from 'next/head'
import React from 'react'

const Home: React.FC = () => {


  return (
    <div>
      <Head>

        <title>Sales App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Welcome!!

      <button className='button is-dark'> Button </button>
    </div>  
  )
}

export default Home;
  
