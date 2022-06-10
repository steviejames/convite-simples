import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Head>
        <title>Tá Pago?</title>
        <link rel="icon" href="/tapago.svg" />
      </Head>
      
      <main className="flex flex-col items-center justify-center flex-1 w-full text-center">
        <Image 
        src="/tapago.svg" 
        alt="Tá Pago? Logo" 
        width={150} 
        height={150} 
        />
        <h1 className="text-18.75x font-mono px-20">
          VERIFICADOR DE TRANSFERÊNCIAS/DEPÓSITOS
        </h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 bg-orange-100 rounded-tl-xl rounded-tr-xl space-around sm:w-full">
          
          <div className='flex flex-col p-6 text-left'>
            <label className='pb-2'>Número do comprovativo:</label>
            <input className='p-3 w-96' placeholder='A0000001100100'></input>
          </div>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 bg-orange-100 border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
