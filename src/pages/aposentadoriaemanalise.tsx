import Head from 'next/head';
import type { NextPage } from 'next';
import StaticBanner from '../components/staticBanner';
import FormsTopics from '../components/formsTitles';
import InsideTopics from '../components/insideTopics';
import ImageGalerySlider from '../components/imageGalerySlider';
import PeopleComents from '../components/peopleComents';
import BlueButton from '../components/atons/blueButton';
import PeopleSlider from '../components/PeopleSlider';
import SimpleHead from '../components/headFormats/simpleHead';
import SimpleFooter from '../components/footerFormats/simpleFooter';
import { useEffect } from 'react';
import { gtmCaller } from '../components/gtmCaller/gtmScript';

const AposentadoriaTempoEspecial: NextPage = () => {

  useEffect(() => {
    window.addEventListener('load', gtmCaller)
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
      <meta property="og:site_name" content="Blog | Glomb Advogados"/>
      <meta property='og:title' content='Aposentadoria parada no INSS tem solução'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/glombimagelogocache.png'/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="801"/>
      <meta property='og:image:alt' content='Aposentadoria demora INSS'/>
      <meta property='og:description' content='O INSS tem 90 dias para analisar seu pedido. Exija uma resposta na justiça.'/>
      <meta property='og:url' content='https://previdenciario.glomb.com.br/aposentadoriaemanalise/'/>
      <meta property='og:type' content='website'/>

      <title>Aposentadoria parada no INSS? Resolva já</title>
      <meta name="keywords" content="aposentadoria; aposentadoria especial, inss aposentadoria, aposentar, aposentadoria por tempo de contribuição, aposentadorias especiais"></meta>
      <meta name="description" content="O INSS tem 90 dias para analisar seu pedido. Após esse prazo, você pode exigir uma resposta na justiça e receber indenização pela demora. Avalie seu caso s/ compromisso."></meta>
    </Head>
    
    {/* <SimpleHead 
        logo='glomb'
        btnTxt='Quero ser atendido'
        btnLink='https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+parada+no+INSS'
    /> */}

    <div className='apearDesktop'>
      <BlueButton 
          isFloating={true} 
          buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+parada+no+INSS'}
          buttonText={'Quero ser atendido'}
        />
    </div>

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="Aposentadoria parada no INSS tem solução"
      subTitle={<>Se seu pedido está em análise no <strong>INSS</strong> há mais de <strong>90 dias</strong>, você pode exigir uma <strong>resposta</strong> na justiça e receber <strong>indenização</strong> pela demora.</>}
      buttonText="Atendemos em todo o Brasil"
      buttonLink="https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+parada+no+INSS"
      headerDesktop='/assets/images/aposentadoria_demora/ap_analise_desk.webp'
      headerDesktopDescription="Aposentadoria demora"
      headerMobile='/assets/images/aposentadoria_demora/ap_analise_mobile.webp'
      headerMobileDescription="Aposentadoria demora"
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
      title={'A demora do INSS causa grandes prejuízos'} 
      text={
        <>
          <p>
            Infelizmente a <strong>demora</strong> do INSS para analisar pedidos de aposentadoria é um problema muito comum. 
          </p>
          <p>
            Porém, isso <strong>prejudica</strong> muitas pessoas que já deveriam estar <strong>recebendo</strong> seus benefícios.
          </p>
          <p>
            Para evitar <strong>prejuízos</strong>, é possível cobrar uma <strong>resposta rápida</strong> na justiça, <strong>garantir</strong> seus direitos e ainda receber uma <strong>indenização</strong> do INSS pela demora.
          </p>
        </>} 
      buttonText={'Quero ser atendido'} 
      buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+parada+no+INSS'} 
      image={'/assets/images/aposentadoria_demora/ap_analise_mobile_1_c.webp'} 
      imageClean={'/assets/images/aposentadoria_demora/ap_analise_desk_1_c.webp'} 
      imageDescription={'Aposentados sorrindo após aumentarem suas aposentadorias'} 
      cleanMode={true}
      getCircle={[true, 2]}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'O INSS tem 90 dias para analisar seu pedido'} 
      text={
        <>  
          <p>
            Como regra geral, o INSS tem um prazo máximo de 90 dias para analisar os pedidos de aposentadoria.
          </p>
          <p>
            Mas no caso da aposentadoria por invalidez, esse prazo é de apenas 45 dias.
          </p>
          <p>
            Se o INSS está demorando para analisar seu pedido de aposentadoria, é possível exigir uma resposta por meio de ação na justiça, receber os valores atrasados e ainda cobrar uma indenização pela demora.
          </p>
        </>
      } 
      buttonText={'Quero ser atendido'} 
      buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+parada+no+INSS'} 
      image={'/assets/images/aposentadoria_demora/ap_analise_mobile_2.webp'} 
      imageClean={'/assets/images/aposentadoria_demora/ap_analise_desk_2.webp'} 
      imageDescription={'Aposentado recebeu um valor maior de aposentadoria'} 
      invertImagePosition={true}
      cleanMode={true}
    />

    <PeopleComents 
      sectionTitle={<>Atendemos <strong>100% on-line</strong> em todo o Brasil</>}
      clientCardsTitle='O que nossos clientes dizem'
      imageUrl={'/assets/images/aposentadoria/grupoPessoasCache.webp'} 
      imageDescription={'Aposentados e pensionistas aumentaram o valor de suas aposentadorias e pensões'}
      cleanLayout={true}
      clientsComentCard={[
        {
          title: 'Excelentes profissionais',
          text:'Excelentes profissionais, muito atenciosos e competentes. Sanaram todas as minhas dúvidas, suprindo as expectativas.',
          starNumber:5,
          clientName:'Marines Gai'
        },
        {
          title: 'Muito bom',
          text:'Muito bom! Plataforma bem fácil, clara e objetiva. O atendimento celular foi cordial e muito profissional. Muito obrigado a todos envolvidos no trabalho.',
          starNumber:5,
          clientName:'William Fabrício de Oliveira'
        },
        {
          title: 'Muito atenciosos',
          text:'Muito atenciosos. Fiquei satisfeita com o atendimento.',
          starNumber:5,
          clientName:'Shirley Ribeiro da Costa'
        },
        {
          title: 'Muito bem atendido',
          text:'Fui muito bem atendido nota 20!',
          starNumber:5,
          clientName:'Dicezar Gomes'
        },
        {
          title: 'Estão de parabéns',
          text:'Essa equipe da Glomb Advogados é ótima. Rapidinho me deu resposta do que eu precisava, estão de parabéns. Muito obrigada.',
          starNumber:5,
          clientName:'Selma Januaria da Silva'
        },
        {
          title: 'Ótimo!',
          text:'Ótimos profissionais, super respeitosos, focados em atender o cliente com excelência.',
          starNumber:5,
          clientName:'Matilde Reami Rodrigues'
        },
        {
          title: 'Extremamante qualificados',
          text:'Renomado escritório de advocacia com profissionais extremamente qualificados e sérios.',
          starNumber:5,
          clientName:'Marcos Aurélio Padilha'
        },
        {
          title: 'Atendimento excelente',
          text:'Ótimo escritório com atendimento excelente. Super indico para quem está procurando um serviço de qualidade.',
          starNumber:5,
          clientName:'Gabriela Fialho'
        }
      ]}
    />
    
    <ImageGalerySlider 
      title={'Transformar vidas por meio da justiça é nosso propósito'} 
      subTitle={['46+ anos de atuação', '25.000+ clientes atendidos']} 
      initialSlideNumber={5}
      cleanCode={true}
      carrouselImages={[
        {
          imageUrl: '/assets/images/escritorio/glomOffice_c.webp',
          imageDescription: 'Corredor do escritório Glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice2_c.webp',
          imageDescription: 'Sala de atendimento aos clientes glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice3_c.webp',
          imageDescription: 'Sala de atendimento aos clientes 2 glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice4_c.webp',
          imageDescription: 'Salas dos advogados especialistas'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice5_c.webp',
          imageDescription: 'Salas dos advogados especialistas'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice6_c.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice7_c.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice8_c.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice9_c.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/escritorio/glomOffice11_c.webp',
          imageDescription: 'Sala de reuniões glomb advogados'
        }
      ]}
    />
    
    <PeopleSlider 
      title='Nossos profissionais'
      subTitle={<p>Nossa equipe altamente qualificada trabalha com excelência e rigor técnico para oferecer o melhor serviço.</p>}
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
      buttonLink='https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+parada+no+INSS'
      buttonText='Quero ser atendido'
    />
    
    <SimpleFooter 
      logo='glomb'
      sloganTxt={<>Atendemos em todo o <strong>território nacional</strong></>}
      subTxt='Inscrição OAB nº 403'
    />
      
  </>
  )
}

export default AposentadoriaTempoEspecial