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

const AposentadoriaTempoEspecial: NextPage = () => {
  
return (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="author" content="Hermes TI"></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Image shared in web social links */}
      <meta property='og:title' content='Você pode se aposentar antes'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/aposentadoria/cover.png'/>
      <meta property='og:image:alt' content='Aposentadoria Especial e tempo especial'/>
      <meta property='og:description' content='Quem trabalhou em atividades prejudiciais se aposenta antes e com um valor maior.'/>
      <meta property='og:url' content='https://previdenciario.glomb.com.br/aposentadoriatempoespecial/'/>
      <meta property='og:type' content='website'/>

      <title>Glomb - O valor da sua aposentadoria pode dobrar</title>
      <meta name="keywords" content="aposentadoria; aposentadoria especial, inss aposentadoria, aposentar, aposentadoria por tempo de contribuição, aposentadorias especiais"></meta>
      <meta name="description" content="Descubra como aumentar o valor da sua aposentadoria e receber uma indenização."></meta>
    </Head>

    <div className='apearDesktop'>
      <BlueButton 
          isFloating={true} 
          buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+especial'}
          buttonText={'Quero ser atendido'}
        />
    </div>

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="Você pode se aposentar antes"
      subTitle={<>Quem trabalhou em <strong>atividades perigosas</strong>, <strong>insalubres</strong> ou <strong>prejudiciais</strong> pode se aposentar <strong>mais cedo</strong> e com um <strong>valor maior</strong>.</>}
      buttonText="Quero ser atendido"
      buttonLink="https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+especial"
      headerDesktop='/assets/images/aposentadoria/headerPersonClean.webp'
      headerDesktopDescription="Aposentada recebeu aposentadoria maior"
      headerMobile='/assets/images/aposentadoria/headerPersonMobile.jpg'
      headerMobileDescription="Aposentada recebeu aposentadoria maior"
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
      title={'Aposente-se antes e com um valor maior'} 
      text={
        <>
          <p>
            Todas as pessoas que trabalharam em atividades <strong>perigosas</strong>, <strong>insalubres</strong> ou <strong>prejudiciais à saúde</strong> têm direito a uma <strong>aposentadoria antecipada</strong> e com <strong>valores maiores</strong>. 
          </p>
        </>} 
      buttonText={'Quero ser atendido'} 
      buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+especial'} 
      image={'/assets/images/aposentadoria/imageAposentadoMelhor.webp'} 
      imageClean={'/assets/images/aposentadoria/imageAposentadoMelhorClean.jpg'} 
      imageDescription={'Aposentados sorrindo após aumentarem suas aposentadorias'} 
      cleanMode={true}
      cleanModeText={'O valor dos benefícios de quem se aposentou até novembro de 2019 pode estar mais baixo do que deveria ser.'}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Quem tem direito?'} 
      text={
        <>  
          <p>
            Quem trabalhou em contato com qualquer um dos itens abaixo tem vantagens na aposentadoria:
          </p>
        </>
      } 
      listText={[
        "Insalubridade ou Periculosidade",
        "Ruído",
        "Forno (calor em geral)",
        "Câmara Fria (frio em geral)",
        "Eletricidade",
        "Óleo, graxa, gasolina",
        "Combustíveis",
        "Petróleo",
        "Poeira",
        "Solda",
        "Sangue",
        "Radiação",
        "Produtos químicos",
        "Maquinário pesado"
      ]}
      buttonText={'Quero ser atendido'} 
      buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+especial'} 
      image={'/assets/images/aposentadoria/vantagemMelhorRevisao.webp'} 
      imageClean={'/assets/images/aposentadoria/vantagemMelhorRevisaoClean.jpg'} 
      imageDescription={'Aposentado recebeu um valor maior de aposentadoria'} 
      invertImagePosition={true}
      cleanMode={true}
      cleanModeText={'A Revisão da Vida Toda pode gerar um aumento no valor mensal de milhares de aposentadoria e pensões.'}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Atividades'} 
      text={<p>Quem trabalhou por qualquer período em alguma dessas atividades também têm direito a uma aposentadoria mais vantajosa:</p>} 
      listText={[
        "Hospitais",
        "Laboratórios",
        "Consultórios",
        "Segurança",
        "Indústria metalúrgica",
        "Indústria química",
        "Gráfica",
        "Madeireira",
        "Mineração",
        "Plataforma ou Refinarias"
      ]}
      buttonText={'Quero ser atendido'} 
      buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+especial'} 
      image={'/assets/images/aposentadoria/quemTemDireito.webp'}
      imageClean={'/assets/images/aposentadoria/quemTemDireitoClean.png'}
      imageDescription={'APensionista recebeu um valor maior de benefício'} 
      cleanMode={true}
      cleanModeText={'Se você se encaixa nesses requisitos, clique em quero ser atendido e descubra se a revisão da vida toda pode aumentar o valor da sua aposentadoria ou pensão.'}
    />

    <PeopleComents 
      sectionTitle={<>Atendemos <strong>100% on-line</strong> em todo o Brasil</>}
      clientCardsTitle='O que nossos clientes dizem'
      imageUrl={'/assets/images/aposentadoria/grupoPessoas.jpg'} 
      imageDescription={'Aposentados e pensionistas aumentaram o valor de suas aposentadorias e pensões'}
      cleanLayout={true}
      clientsComentCard={[
        {
          title: 'Excelentes profissionais',
          text:'Excelentes profissionais, muito atenciosos e competentes. Sanaram todas as minhas dúvidas, suprindo as expectativas.',
          starNumber:5,
          clientName:'Doroti Valeixo'
        },
        {
          title: 'Muito bom',
          text:'Muito bom! Plataforma bem fácil, clara e objetiva. O atendimento celular foi cordial e muito profissional. Muito obrigado a todos envolvidos no trabalho.',
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
      
  </>
  )
}

export default AposentadoriaTempoEspecial