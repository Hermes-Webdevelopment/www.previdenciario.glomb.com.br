import Head from 'next/head';
import type { NextPage } from 'next';
import StaticBanner from '../components/staticBanner';
import FormsTopics from '../components/formsTitles';
import InsideTopics from '../components/insideTopics';
import BlueButton from '../components/atons/blueButton';
import SimpleHead from '../components/headFormats/simpleHead';

import dynamic from "next/dynamic";
import { useEffect, useState } from 'react';

const PeopleComents = dynamic(() =>  import('../components/peopleComents'));
const ImageGalerySlider = dynamic(() =>  import('../components/imageGalerySlider'));
const PeopleSlider = dynamic(() =>  import('../components/PeopleSlider'));
const SimpleFooter = dynamic(() =>  import('../components/footerFormats/simpleFooter'));

const VidaTodaClean: NextPage = () => {
  const [shown, setShown] = useState(false);

  // 3. Attach a scroll event handler
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
      <meta property="og:site_name" content="Blog | Glomb Advogados"/>
      <meta property='og:title' content='Sua aposentadoria pode dobrar'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/glombimagelogoc.png'/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="801"/>
      <meta property='og:image:alt' content='Revisão da vida toda'/>
      <meta property='og:description' content='A revisão da vida toda permite aumentar o valor da aposentadoria e cobrar uma indenização.'/>
      <meta property='og:url' content='https://previdenciario.glomb.com.br/vidatoda/'/>
      <meta property='og:type' content='website'/>
      

      <title>Sua aposentadoria pode dobrar</title>
      <meta name="keywords" content="revisão da vida toda, revisão da vida toda stf, revisão da vida toda INSS, revisão aposentadoria, aumentar aposentadoria"></meta>
      <meta name="description" content="Com a revisão da vida toda é possível aumentar o valor de sua aposentadoria ou pensão e receber uma indenização pelas diferenças dos últimos 5 anos."></meta>
    </Head>
                    
    {/* <SimpleHead 
        logo='glomb'
        btnTxt='Quero ser atendido'
        btnLink="https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+revisão+da+vida+toda"
    /> */}

    <div className='apearDesktop'>
      <BlueButton 
          isFloating={true} 
          buttonLink={"https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+revisão+da+vida+toda"}
          buttonText={'Quero ser atendido'}
        />
    </div>

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="SUA APOSENTADORIA PODE DOBRAR"
      subTitle={<>A Revisão da Vida Toda permite <strong>aumentar o valor</strong> de sua aposentadoria ou pensão e cobrar uma <strong>indenização</strong> pelas diferenças dos últimos 5 anos.</>}
      buttonText="Atendemos em todo o Brasil"
      buttonLink="https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+revisão+da+vida+toda"
      headerDesktop='/assets/images/vidatoda/vt_desk_c.webp'
      headerDesktopDescription="Revisão da vida toda"
      headerMobile='/assets/images/vidatoda/vt_mobile_c.webp'
      headerMobileDescription="Revisão da vida toda"
    />

    <FormsTopics 
      firstTitle="Sem compromisso" 
      firstSubTitle={<>Avaliamos seu caso <strong>sem compromisso</strong> para que você conquiste sua aposentadoria.</>}
      secondTitle="Atendimento especializado"
      secondSubTitle={<>Somos referência em serviços jurídicos há <strong>45 anos</strong>.</>}
      thirdTitle="Conquiste seus direitos"
      thirdSubTitle={<>Nossos advogados entrarão em contato para indicar a <strong>melhor solução</strong>.</>}
      cleanModel={true}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Você pode ter uma aposentadoria melhor'} 
      text={
        <>
          <p>
            Milhares de <strong>aposentados </strong>que contribuíram ao INSS <strong>antes de 1994</strong>, podem estar recebendo uma <strong>aposentadoria menor</strong> do que deveriam.
          </p>
          <p>
            Isso acontece porque, para calcular o valor das aposentadorias, o INSS considerava apenas as contribuições feitas após julho de 1994 e <strong>excluía</strong> todas as anteriores.
          </p>
        </>} 
      buttonText={'Quero ser atendido'} 
      buttonLink={"https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+revisão+da+vida+toda"} 
      image={'/assets/images/vidatoda/vt_mobile_1.webp'} 
      imageClean={'/assets/images/vidatoda/vt_desk_1.webp'} 
      imageDescription={'Aposentados sorrindo após aumentarem suas aposentadorias'} 
      cleanMode={true}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Vantagens da Revisão da Vida Toda'} 
      text={
        <>  
          <p>
            Em dezembro de 2022 o STF aprovou a Revisão da Vida Toda, que tem como objetivo <strong>corrigir a injustiça</strong> no cálculo das aposentadorias das pessoas que contribuíram ao INSS antes de 1994.
          </p>
          <p>
          Agora é possível considerar todas as contribuições feitas ao longo da vida para recalcular milhares de benefícios e cobrar uma indenização pelas diferenças dos últimos 5 anos.
          </p>
        </>
      } 
      buttonText={'Quero ser atendido'} 
      buttonLink={"https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+revisão+da+vida+toda"} 
      image={'/assets/images/vidatoda/vt_mobile_2.webp'} 
      imageClean={'/assets/images/vidatoda/vt_desk_2.webp'} 
      imageDescription={'Aposentado recebeu um valor maior de aposentadoria'} 
      invertImagePosition={true}
      cleanMode={true}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Quem tem direito?'} 
      text={<p>Infelizmente não são todas as pessoas que têm esse direito. A Revisão da Vida Toda se aplica apenas aos <strong>aposentados</strong> e <strong>pensionistas</strong> que:</p>} 
      listText={[
        <>Contribuíram ao INSS <strong>antes de 1994</strong> e;</>,
        <>Recebem o benefício <strong>há menos de 10 anos.</strong></>
      ]}
      buttonText={'Quero ser atendido'} 
      buttonLink={"https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+revisão+da+vida+toda"} 
      image={'/assets/images/vidatoda/vt_mobile_3.webp'} 
      imageClean={'/assets/images/vidatoda/vt_desk_3.webp'} 
      imageDescription={'A Pensionista recebeu um valor maior de benefício'} 
      cleanMode={true}
    />

    {shown &&
    <PeopleComents 
      sectionTitle={<>Atendemos <strong>100% on-line</strong> em todo o Brasil</>}
      clientCardsTitle='O que nossos clientes dizem'
      imageUrl={'/assets/images/aposentadoria/grupoPessoasCache.webp'} 
      imageDescription={'Aposentados e pensionistas aumentaram o valor de suas aposentadorias e pensões'}
      cleanLayout={true}
      clientsComentCard={[
        {
          title: 'Muito bem atendida',
          text:'Muito bem atendida pela excelente advogada, Dra. Bruna Stephano, "expert" em direito previdenciário. Super Recomendo!',
          starNumber:5,
          clientName:'Doroti Valeixo'
        },
        {
          title: 'Confiança e profissionalismo',
          text:'Sou cliente deste conceituado escritório de advocacia há mais de 20 anos, e sempre fui atendido com muito profissionalismo. Recomendo!',
          starNumber:5,
          clientName:'Tadeu Timowicz'
        },
        {
          title: 'Há mais de 25 anos',
          text:'Atendimento impecável, tratei com os advogados mais experientes da área. Sou cliente do escritório a mais de 25 anos.',
          starNumber:5,
          clientName:'Nilva Carvalho'
        },
        {
          title: 'Rápido e excelente trabalho',
          text:'Gostaria de agradecer o excelente trabalho realizado pela Dra Bruna Stefano. O processo foi concluído com sucesso em um tempo muito bom.',
          starNumber:5,
          clientName:'Daiane Lima'
        },
        {
          title: 'Atendimento excelente',
          text:'Ótimo atendimento, excelente. Super indico para quem está procurando um serviço de qualidade.',
          starNumber:5,
          clientName:'Gabriela Fialho'
        },
        {
          title: 'Profissionais focados e respeitosos',
          text:'Ótimos profissionais, super respeitosos, focados em atender o cliente com excelência.',
          starNumber:5,
          clientName:'Matilde Rodrigues'
        },
        {
          title: 'Atendimento excelente',
          text:'Ótimo escritório com atendimento excelente. Super indico para quem está procurando um serviço de qualidade.',
          starNumber:5,
          clientName:'Gabriela Fialho'
        }
      ]}
    />
    }
    {shown &&
    <ImageGalerySlider 
      title={'Transformar vidas por meio da justiça é nosso propósito'} 
      subTitle={['46+ anos de atuação', '25.000+ clientes atendidos']} 
      initialSlideNumber={5}
      cleanCode={true}
      carrouselImages={[
        {
          imageUrl: '/assets/images/escritorio/glomOffice.webp',
          imageDescription: 'Corredor do escritório Glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice2.webp',
          imageDescription: 'Sala de atendimento aos clientes glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice3.webp',
          imageDescription: 'Sala de atendimento aos clientes 2 glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice4.webp',
          imageDescription: 'Salas dos advogados especialistas'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice5.webp',
          imageDescription: 'Salas dos advogados especialistas'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice6.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice7.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice8.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice9.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice11.webp',
          imageDescription: 'Sala de reuniões glomb advogados'
        }
      ]}
    />
    }
    {shown &&
    <PeopleSlider 
      title='Nossos profissionais'
      subTitle={<p>Nossa equipe altamente qualificada trabalha com excelência e rigor técnico para oferecer o melhor serviço.</p>}
      carrouselImages={[
        
        {
          imageUrl: '/assets/images/advogados/1jose_lucio_glomb.webp',
          imageTitle: 'José Lúcio Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 6.838'
        },

        {
          imageUrl: '/assets/images/advogados/1daniel_glomb.webp',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 45.288'
        },
        
        {
          imageUrl: '/assets/images/advogados/1angela_glomb.webp',
          imageTitle: 'Angela Glomb',
          imageSubTitle: 'Advogada',
          text: 'OAB/PR 37.004'
        },
        
        {
          imageUrl: '/assets/images/advogados/1marcia_leticia_glomb.webp',
          imageTitle: 'Márcia Letícia Glomb',
          imageSubTitle: 'Advogada',
          text: 'OAB/PR 86.573'
        },
        
        {
          imageUrl: '/assets/images/advogados/1cleide_glomb.webp',
          imageTitle: 'Cleide Glomb',
          imageSubTitle: 'Advogada',
          text: 'OAB/PR 26.012'
        },
        
        {
          imageUrl: '/assets/images/advogados/1lucas_emmendorfer.webp',
          imageTitle: 'Lucas Emmendorfer',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 111.802'
        },
        
        {
          imageUrl: '/assets/images/advogados/1rogerio_loch.webp',
          imageTitle: 'Rogério Loch',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 113.316'
        },
        
        {
          imageUrl: '/assets/images/advogados/1francisco_torres.webp',
          imageTitle: 'Francisco Torres',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 45.155'
        },
        
        {
          imageUrl: '/assets/images/advogados/1marcelo_mano_alves.webp',
          imageTitle: 'Marcelo Mano Alves',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 44.200'
        },
        
        {
          imageUrl: '/assets/images/advogados/1andre_durdyn.webp',
          imageTitle: 'André Durdyn',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 41.300'
        },
        
        {
          imageUrl: '/assets/images/advogados/1paulo_eduardo_muller.webp',
          imageTitle: 'Paulo Eduardo Müller',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 59.060'
        },
        
        {
          imageUrl: '/assets/images/advogados/1guilherme_seiti.webp',
          imageTitle: 'Guilherme Seiti',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 42.351'
        },
        
        {
          imageUrl: '/assets/images/advogados/1mauricio_simoes.webp',
          imageTitle: 'Maurício Simões',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 37.008'
        },
        
        {
          imageUrl: '/assets/images/advogados/1jose_paulo_barcellos.webp',
          imageTitle: 'José Paulo Barcellos',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 47.112'
        }
      ]}
      buttonLink='https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+revisão+da+vida+toda'
      buttonText='Quero ser atendido'
    />
    }
    {shown &&
      <SimpleFooter 
        logo='glomb'
        sloganTxt={<>Atendemos em todo o <strong>território nacional</strong></>}
        subTxt='Inscrição OAB nº 403'
      />
    }
  </>
  )
}

export default VidaTodaClean