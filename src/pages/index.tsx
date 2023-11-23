import Head from 'next/head'
import type { NextPage } from 'next'
import WordsBanner from '../components/banners/wordsBanner'

const Home: NextPage = () => {
return (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="author" content="Hermes TI"></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Image shared in web social links */}
      <meta property="og:locale" content="pt_BR"/>
      <meta property="fb:app_id" content="824919729364803" />
      <meta property="og:site_name" content="Glomb Advogados"/>
      <meta property='og:title' content='Sofreu acidente? Receba um valor do INSS'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/glombimagelogocache.png'/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="801"/>
      <meta property='og:image:alt' content=''/>
      <meta property='og:description' content=''/>
      <meta property='og:url' content='https://previdenciario.glomb.com.br/'/>
      <meta property='og:type' content='website'/>

      <title>Glomb</title>
      <meta name="keywords" content=""></meta>
      <meta name="description" content=""></meta>
    </Head>
      <WordsBanner 
        title={'Transformar vidas por meio da justiça é nossa'} 
        text={
          <>
            <p>Acreditamos que a advocacia tem uma importante tarefa: tornar a sociedade mais justa e igualitária.</p>
            <p>Entendemos que processos judiciais podem transformar vidas e, por isso, dedicamos nossos esforços para promover transformações positivas nas vidas de nossos clientes.</p>
            <p>Atendemos <strong>100% on-line</strong> em todo o Brasil e em nossos escritórios <strong>presencialmente</strong></p>
          </>} 
        img={'/assets/images/home/banner.jpg'} 
        imgMobile={'/assets/images/home/banner-mobile.jpg'} 
        imgAlt={'Imagem da home'} 
        buttonText={'Quero ser atendido'} 
        buttonLink={'/'}        
      />
  </>
  )
}

export default Home
