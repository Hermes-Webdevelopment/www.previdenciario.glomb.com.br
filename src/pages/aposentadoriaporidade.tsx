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

const AposentadoriaTempoEspecial: NextPage = () => {
  
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
      <meta property='og:title' content='Conquiste sua aposentadoria'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/glombimagelogoc.png'/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="801"/>
      <meta property='og:image:alt' content='Aposentadoria por Idade'/>
      <meta property='og:description' content='Quem completou 60 anos de idade e contribuiu ao INSS por 15 anos já pode ter direito à aposentadoria.'/>
      <meta property='og:url' content='https://previdenciario.glomb.com.br/aposentadoriaporidade/'/>
      <meta property='og:type' content='website'/>

      <title>Conquiste sua Aposentadoria</title>
      <meta name="keywords" content="aposentadoria, aposentar, aposentadoria por idade, aposentadoria por tempo de contribuição"></meta>
      <meta name="description" content="Quem tem 60 anos e 15 anos de contribuição já pode ter direito à aposentadoria."></meta>
    </Head>
    
    {/* <SimpleHead 
        logo='glomb'
        btnTxt='Quero ser atendido'
        btnLink='https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+por+idade'
    /> */}

    <div className='apearDesktop'>
      <BlueButton 
          isFloating={true} 
          buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+por+idade'}
          buttonText={'Quero ser atendido'}
        />
    </div>

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="Conquiste sua Aposentadoria"
      subTitle={<>Quem completou <strong>60 anos</strong> de idade e contribuiu ao INSS por <strong>15 anos</strong> já pode ter direito à <strong>aposentadoria</strong>.</>}
      buttonText="Atendemos em todo o Brasil"
      buttonLink="https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+por+idade"
      headerDesktop='/assets/images/aposentadoria_idade/ap_idade.webp'
      headerDesktopDescription=" Aposentadoria por idade"
      headerMobile='/assets/images/aposentadoria_idade/ap_idade_mobile.webp'
      headerMobileDescription=" Aposentadoria por idade"
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
      title={'Você já pode ter direito à aposentadoria'} 
      text={
        <>
          <p>
            As pessoas que já completaram <strong>60 anos de idade</strong> e contribuíram para o INSS por <strong>15 anos</strong> podem ter direito de se aposentar. 
          </p>
          <p>
            Além disso, quem já trabalhou na <strong>roça</strong> ou em <strong>atividades prejudiciais</strong> à saúde pode usar esse tempo de trabalho para conquistar uma <strong>aposentadoria melhor</strong>.
          </p>
        </>} 
      buttonText={'Quero ser atendido'} 
      buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+por+idade'} 
      image={'/assets/images/aposentadoria_idade/ap_idade_mobile_1.webp'} 
      imageClean={'/assets/images/aposentadoria_idade/ap_idade_desk_1.webp'} 
      imageDescription={'Aposentados sorrindo após aumentarem suas aposentadorias'} 
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
      buttonLink='https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+por+idade'
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