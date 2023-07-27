import Head from 'next/head';
import type { NextPage } from 'next';
import StaticBanner from '../components/staticBanner';
import FormsTopics from '../components/formsTitles';
import InsideTopics from '../components/insideTopics';
import ImageGalerySlider from '../components/imageGalerySlider';
import PeopleComents from '../components/peopleComents';
import BlueButton from '../components/atons/blueButton';
import SingleText from '../components/singleTextSection';
import PeopleSlider from '../components/PeopleSlider';
import Faq from '../components/faq';

const VidaTodaClean: NextPage = () => {
  
return (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="author" content="Hermes TI"></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Image shared in web social links */}
      <meta property='og:title' content='O valor da sua aposentadoria pode dobrar'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/aposentadoria/cover.png'/>
      <meta property='og:image:alt' content='Logomarca Glomb'/>
      <meta property='og:description' content='Descubra como aumentar o valor da sua aposentadoria e receber uma indenização.'/>
      <meta property='og:url' content='https://previdenciario.glomb.com.br/vidatoda/'/>
      <meta property='og:type' content='website'/>

      <title>Glomb - O valor da sua aposentadoria pode dobrar</title>
      <meta name="keywords" content="aposentadoria, aposentado, pensionista, revisão, vida toda, INSS, Advogado"></meta>
      <meta name="description" content="Descubra como aumentar o valor da sua aposentadoria e receber uma indenização."></meta>
    </Head>

    <div className='apearDesktop'>
      <BlueButton 
          isFloating={true} 
          buttonLink={'/'}
          buttonText={'Quero ser atendido'}
        />
    </div>

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="O VALOR DA SUA APOSENTADORIA PODE DOBRAR"
      subTitle={<>A Revisão da Vida Toda pode aumentar o valor da sua aposentadoria ou pensão e pagar uma indenização pelas diferenças dos últimos 5 anos.</>}
      buttonText="Quero ser atendido"
      buttonLink="/"
      advantages={["Sem compromisso", "100% on-line", "Atendimento especializado"]}
      headerDesktop='/assets/images/aposentadoria/headerPersonNewModel.jpg'
      headerDesktopDescription="Aposentada recebeu aposentadoria maior"
      headerMobile='/assets/images/aposentadoria/headerPersonMobile.jpg'
      headerMobileDescription="Aposentada recebeu aposentadoria maior"
    />

    <FormsTopics 
      firstTitle="Poupe seu tempo" 
      firstSubTitle="Avaliamos seu caso sem compromisso e indicamos como conquistar seus direitos."
      secondTitle="Resolva sua necessidade"
      secondSubTitle="Nossos advogados especialistas entrarão em contato para atendê-lo e indicar a melhor solução."
      thirdTitle="Conquiste seus direitos"
      thirdSubTitle="Conte com nossa experiência de 45 anos e descubra se você tem direito à revisão da vida toda."
      cleanModel={true}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Você pode ter uma aposentadoria melhor'} 
      text={
        <>
          <p>
            Milhares de <strong>aposentados </strong>que contribuíram ao INSS <strong>antes de 1994</strong>, podem estar recebendo uma <strong>aposentadoria menor</strong> do que deveriam.<br/>
          </p>
          <p>
            Isso acontece porque, para calcular o valor das aposentadorias, o INSS considerava apenas as contribuições feitas após julho de 1994 e <strong>excluía</strong> todas as anteriores.<br /> 
          </p>
        </>} 
      buttonText={'Quero ser atendido'} 
      buttonLink={'/'} 
      image={'/assets/images/aposentadoria/imageAposentadoMelhor.jpg'} 
      imageClean={'/assets/images/aposentadoria/imageAposentadoMelhorClean.jpg'} 
      imageDescription={'Aposentados sorrindo após aumentarem suas aposentadorias'} 
      cleanMode={true}
      cleanModeText={'O valor dos benefícios de quem se aposentou até novembro de 2019 pode estar mais baixo do que deveria ser.'}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Vantagens da Revisão da Vida Toda'} 
      text={
        <>  
          <p>
            Em dezembro de 2022 o STF aprovou a Revisão da Vida Toda, que tem como objetivo <strong>corrigir a injustiça</strong> no cálculo nas aposentadorias.
          </p>
          <p>
            Agora é possível considerar todas as contribuições feitas ao longo da vida para <strong>recalcular</strong> milhares de <strong>aposentadorias</strong> e <strong>pensões</strong>.
          </p>
        </>
      } 
      buttonText={'Quero ser atendido'} 
      buttonLink={'/'} 
      image={'/assets/images/aposentadoria/vantagemMelhorRevisao.jpg'} 
      imageClean={'/assets/images/aposentadoria/vantagemMelhorRevisaoClean.jpg'} 
      imageDescription={'Aposentado recebeu um valor maior de aposentadoria'} 
      invertImagePosition={true}
      cleanMode={true}
      cleanModeText={'A Revisão da Vida Toda pode gerar um aumento no valor mensal de milhares de aposentadoria e pensões.'}
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
      buttonLink={'/'} 
      image={'/assets/images/aposentadoria/quemTemDireito.jpg'}
      imageClean={'/assets/images/aposentadoria/quemTemDireitoClean.png'}
      imageDescription={'APensionista recebeu um valor maior de benefício'} 
      cleanMode={true}
      cleanModeText={'Se você se encaixa nesses requisitos, clique em quero ser atendido e descubra se a revisão da vida toda pode aumentar o valor da sua aposentadoria ou pensão.'}
    />
    
    <ImageGalerySlider 
      title={'Transformar vidas por meio da justiça é nosso propósito'} 
      subTitle={['46+ anos de atuação', '25.000+ clientes atendidos']} 
      initialSlideNumber={5}
      cleanCode={true}
      carrouselImages={[
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice.jpg',
          imageDescription: 'Corredor do escritório Glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice2.jpg',
          imageDescription: 'Sala de atendimento aos clientes glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice3.jpg',
          imageDescription: 'Sala de atendimento aos clientes 2 glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice4.jpg',
          imageDescription: 'Salas dos advogados especialistas'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice5.jpg',
          imageDescription: 'Salas dos advogados especialistas'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice6.jpg',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice7.jpg',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice8.jpg',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice9.jpg',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice10.jpg',
          imageDescription: 'Sala de reuniões glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice11.jpg',
          imageDescription: 'Sala de reuniões glomb advogados'
        }
      ]}
    />

    <PeopleComents 
      sectionTitle={<>Atendemos <strong>100% on-line</strong> em todo o Brasil</>}
      clientCardsTitle='O que nossos clientes dizem'
      imageUrl={'/assets/images/aposentadoria/grupoPessoas.jpg'} 
      imageDescription={'Aposentados e pensionistas aumentaram o valor de suas aposentadorias e pensões'}
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
      ]}
    />
    <SingleText 
      text='Se você se encaixa nesses requisitos, clique em quero ser atendido e descubra se a revisão da vida toda pode aumentar o valor da sua aposentadoria ou pensão.'
    />
    <PeopleSlider 
      title='Nossos profissionais'
      subTitle={<p>Contamos com uma equipe altamente qualificada.<br />Trabalhamos com excelência e rigor técnico para oferecer o melhor serviço.</p>}
      carrouselImages={[
        {
          imageUrl: '/assets/images/aposentadoria/advogados/danielGlomb.png',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 103.642'
        },
        
        {
          imageUrl: '/assets/images/aposentadoria/advogados/danielGlomb.png',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 103.642'
        },
        
        {
          imageUrl: '/assets/images/aposentadoria/advogados/danielGlomb.png',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 103.642'
        },
        
        {
          imageUrl: '/assets/images/aposentadoria/advogados/danielGlomb.png',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 103.642'
        },
        
        {
          imageUrl: '/assets/images/aposentadoria/advogados/danielGlomb.png',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 103.642'
        },
        
        {
          imageUrl: '/assets/images/aposentadoria/advogados/danielGlomb.png',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 103.642'
        },
        
        {
          imageUrl: '/assets/images/aposentadoria/advogados/danielGlomb.png',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 103.642'
        },
        
        {
          imageUrl: '/assets/images/aposentadoria/advogados/danielGlomb.png',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 103.642'
        },
        
        {
          imageUrl: '/assets/images/aposentadoria/advogados/danielGlomb.png',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 103.642'
        },
        
        {
          imageUrl: '/assets/images/aposentadoria/advogados/danielGlomb.png',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 103.642'
        },
      ]}
    />

    <Faq 
      title={'Dúvidas frequentes'}
      questionWithAnswer={[
        {
          question: 'Quais são os direitos legais dos idosos e como protegê-los?',
          answer:'Para garantir a proteção desses direitos, é essencial buscar o auxílio de um advogado especializado em direitos dos idosos. Um profissional qualificado pode ajudar a identificar violações dos direitos, fornecer orientação legal, auxiliar na elaboração de documentos importantes, como testamentos e procurações, e representar os interesses dos idosos em casos de abuso ou negligência.'
        },
        {
          question: 'Como posso garantir a segurança financeira e o planejamento patrimonial para a terceira idade?',
          answer:'Para garantir a proteção desses direitos, é essencial buscar o auxílio de um advogado especializado em direitos dos idosos. Um profissional qualificado pode ajudar a identificar violações dos direitos, fornecer orientação legal, auxiliar na elaboração de documentos importantes, como testamentos e procurações, e representar os interesses dos idosos em casos de abuso ou negligência.'
        },
        {
          question: 'Quais são as opções legais para cuidados de saúde e tomada de decisões médicas para idosos?',
          answer:'Para garantir a proteção desses direitos, é essencial buscar o auxílio de um advogado especializado em direitos dos idosos. Um profissional qualificado pode ajudar a identificar violações dos direitos, fornecer orientação legal, auxiliar na elaboração de documentos importantes, como testamentos e procurações, e representar os interesses dos idosos em casos de abuso ou negligência.'
        },
        {
          question: 'O que fazer em casos de abuso ou negligência de idosos e como buscar justiça?',
          answer:'Para garantir a proteção desses direitos, é essencial buscar o auxílio de um advogado especializado em direitos dos idosos. Um profissional qualificado pode ajudar a identificar violações dos direitos, fornecer orientação legal, auxiliar na elaboração de documentos importantes, como testamentos e procurações, e representar os interesses dos idosos em casos de abuso ou negligência.'
        },
        {
          question: 'Como posso planejar uma sucessão familiar e transmitir meu patrimônio para meus entes queridos?',
          answer:'Para garantir a proteção desses direitos, é essencial buscar o auxílio de um advogado especializado em direitos dos idosos. Um profissional qualificado pode ajudar a identificar violações dos direitos, fornecer orientação legal, auxiliar na elaboração de documentos importantes, como testamentos e procurações, e representar os interesses dos idosos em casos de abuso ou negligência.'
        },
        {
          question: 'Quais são os tipos de contratos ou acordos legais recomendados para idosos em diferentes situações?',
          answer:'Para garantir a proteção desses direitos, é essencial buscar o auxílio de um advogado especializado em direitos dos idosos. Um profissional qualificado pode ajudar a identificar violações dos direitos, fornecer orientação legal, auxiliar na elaboração de documentos importantes, como testamentos e procurações, e representar os interesses dos idosos em casos de abuso ou negligência.'
        },
        {
          question: 'Quais são os benefícios e recursos disponíveis para os idosos e como acessá-los legalmente?',
          answer:'Para garantir a proteção desses direitos, é essencial buscar o auxílio de um advogado especializado em direitos dos idosos. Um profissional qualificado pode ajudar a identificar violações dos direitos, fornecer orientação legal, auxiliar na elaboração de documentos importantes, como testamentos e procurações, e representar os interesses dos idosos em casos de abuso ou negligência.'
        },
      ]}
    />
      
  </>
  )
}

export default VidaTodaClean