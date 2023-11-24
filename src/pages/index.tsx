import Head from 'next/head'
import type { NextPage } from 'next'
import WordsBanner from '../components/banners/wordsBanner'
import ImageSlider from '../components/galeries/imageSlider'
import OurServices from '../components/ourServices'
import GrowingNumber from '../components/growingNumber'
import { useEffect, useState } from 'react'
import { gtmCaller } from '../components/scriptCaller/gtmScript'
import { clarityCaller } from '../components/scriptCaller/clarityScript'
import PeopleSlider from '../components/PeopleSlider'

const Home: NextPage = () => {
  const [shown, setShown] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 250) {
        setShown(true);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  
  const linkWhatsAp = 'https://wa.me/554132239132?text=Olá!+Gostaria+de+analisar+meu+caso+sem+compromisso+-+loas-bpc'

  useEffect(() => {
    window.addEventListener('load', gtmCaller)
    window.addEventListener('load', clarityCaller)
  },[])
  
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
      
      <OurServices 
        title1={'Nossos Serviços'}
        link1={'/'}
        text1={'Nossa missão é proporcionar a melhor experiência na prestação de serviços juridícos, com agilidade no atendimento e assertividade na solução.'}
        title2={'Direito do Trabalho'}
        link2={'/'}
        text2={'Atuamos de forma completa na defesa dos direitos trabalhistas, focados em promover justiça nas relações de trabalho.'}
        title3={'Direito Previdenciário'}
        link3={'/'}
        text3={'Atuamos com pedidos e revisões de benefícios do INSS, para promover seus direitos previdenciários. '} 
        bgimg1={'/assets/images/home/box1.jpg'} 
        bgimg2={'/assets/images/home/box2.jpg'} 
        bgimg3={'/assets/images/home/box3.jpg'}     
      />
    {shown &&
      <>
        <GrowingNumber 
          title={'Há mais de 46 anos transformando vidas'}
          text={'Temos a satisfação de contribuir com a sociedade e transformar vidas por meio da justiça há mais de 46 anos.'}
          years={'42'}
          yearsText={'+ anos de atuação'}
          clients={'23125'}
          clientsText={'+ clientes atendidos'}
        />

        <PeopleSlider 
          title='Nossos profissionais'
          subTitle={<p>Nosso propósito é <strong>transformar vidas</strong> por meio da justiça. Por isso, não poupamos esforços para promover transformações positivas nas vidas dos nossos clientes.</p>}
          whiteVersion={true}
          carrouselImages={[
            
            {
              imageUrl: '/assets/images/advogados/2jose_lucio_glomb.webp',
              imageTitle: 'José Lúcio Glomb',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 6.838'
            },

            {
              imageUrl: '/assets/images/advogados/2daniel_glomb.webp',
              imageTitle: 'Daniel Glomb',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 45.288'
            },
            
            {
              imageUrl: '/assets/images/advogados/2angela_glomb.webp',
              imageTitle: 'Angela Glomb',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 37.004'
            },
            
            {
              imageUrl: '/assets/images/advogados/2marcia_leticia_glomb.webp',
              imageTitle: 'Márcia Letícia Glomb',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 86.573'
            },
            
            {
              imageUrl: '/assets/images/advogados/2cleide_glomb.webp',
              imageTitle: 'Cleide Glomb',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 26.012'
            },
            
            {
              imageUrl: '/assets/images/advogados/2lucas_emmendorfer.webp',
              imageTitle: 'Lucas Emmendorfer',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 111.802'
            },
            
            {
              imageUrl: '/assets/images/advogados/2rogerio_loch.webp',
              imageTitle: 'Rogério Loch',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 113.316'
            },
            
            {
              imageUrl: '/assets/images/advogados/2francisco_torres.webp',
              imageTitle: 'Francisco Torres',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 45.155'
            },
            
            {
              imageUrl: '/assets/images/advogados/2marcelo_mano_alves.webp',
              imageTitle: 'Marcelo Mano Alves',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 44.200'
            },
            
            {
              imageUrl: '/assets/images/advogados/2andre_durdyn.webp',
              imageTitle: 'André Durdyn',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 41.300'
            },
            
            {
              imageUrl: '/assets/images/advogados/2paulo_eduardo_muller.webp',
              imageTitle: 'Paulo Eduardo Müller',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 59.060'
            },
            
            {
              imageUrl: '/assets/images/advogados/2guilherme_seiti.webp',
              imageTitle: 'Guilherme Seiti',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 42.351'
            },
            
            {
              imageUrl: '/assets/images/advogados/2mauricio_simoes.webp',
              imageTitle: 'Maurício Simões',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 37.008'
            },
            
            {
              imageUrl: '/assets/images/advogados/2jose_paulo_barcellos.webp',
              imageTitle: 'José Paulo Barcellos',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 47.112'
            }
          ]}
          buttonLink={linkWhatsAp}
          buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>}
        />

        <ImageSlider 
          title={'O Escritório'} 
          text={
            <>
              <p>Temos uma estrutura completa para atender em <strong>todo o Brasil</strong>, presencialmente em nossos escritórios ou 100% on-line, sempre com foco na satisfação do cliente.</p>
              <p>Investimos nas mais modernas tecnologias para fornecer soluções eficientes.</p>
              <p>Agregando inovação tecnológica ao conhecimento jurídico, garantimos agilidade no atendimento  e assertividade na solução de problemas.</p>
              <p>Somos signatários do Pacto Global - ONU. Apoiamos o Complexo Pequeno Príncipe, maior hospital pediátrico do Brasil. Recebemos prêmio da Revista Análise - Escritório mais Admirado.</p>
            </>} 
          img={'/assets/images/home/office.jpg'} 
          imgMobile={'/assets/images/home/office.jpg'} 
          imgAlt={'Imagem do escritorio'}  
        />
      </>
    }
  </>
  )
}

export default Home
