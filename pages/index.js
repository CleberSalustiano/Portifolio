import Head from 'next/head'
import Image from 'next/image'
import photoMain from "../assets/component1.png"
import { Main, About } from './style'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifólio</title>
      </Head>
      <Main id='main'>
        <section>
          <Image src={photoMain} width="100%" height="100%" />
          <div>
            <h1>Olá, eu sou o <span>Cleber</span>.</h1>
            <p>
              Sou um Desenvolvedor de Software e futuro Engenheiro de Software. Tenho interesse em Engenharia e Arquitetura de Software, Inteligência Artificial, IOT e outros relacionados. 
            </p>
          </div>
        </section>
        <About>
        TESTE
        </About>
      </Main>
      
    </>
  )
}
