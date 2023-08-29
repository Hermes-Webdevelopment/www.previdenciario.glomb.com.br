import Head from 'next/head';
import type { NextPage } from 'next';
import StaticBanner from '../components/staticBanner';
import FormsTopics from '../components/formsTitles';
import InsideTopics from '../components/insideTopics';
import ImageGalerySlider from '../components/imageGalerySlider';
import PeopleComents from '../components/peopleComents';
import BlueButton from '../components/atons/blueButton';
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
      <meta property='og:title' content='Você pode receber um valor mensal do INSS'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/aposentadoria/cover.png'/>
      <meta property='og:image:alt' content='Loas BPC'/>
      <meta property='og:description' content='Idosos ou pessoas com deficiência podem receber um salário mínimo mensal do INSS.'/>
      <meta property='og:url' content='https://previdenciario.com.br/loasbpcgeral/'/>
      <meta property='og:type' content='website'/>

      <title>Você pode receber um valor mensal do INSS</title>
      <meta name="keywords" content="benefício de prestação continuada, loas, bpc, bpc loas, bpcloas, loas quem tem direito, bpc quem tem direito"></meta>
      <meta name="description" content="Idosos ou pessoas com deficiência podem receber um salário mínimo mensal do INSS."></meta>
    </Head>

    <div className='apearDesktop'>
      <BlueButton 
          isFloating={true} 
          buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+loas+bpc+geral'}
          buttonText={'Quero ser atendido'}
        />
    </div>

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="Você pode receber um valor mensal do INSS"
      subTitle={<>Pessoas com <strong>65 anos</strong> ou mais ou com <strong>deficiência</strong> de qualquer idade podem receber um salário mínimo mensal do INSS.</>}
      buttonText="Quero ser atendido"
      buttonLink="https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+loas+bpc+geral"
      headerDesktop='/assets/images/aposentadoria/headerPersonClean.webp'
      headerDesktopDescription="Receba um salário mínimo do INSS"
      headerMobile='/assets/images/aposentadoria/headerPersonMobile.webp'
      headerMobileDescription="Receba um salário mínimo do INSS"
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
      title={'Benefício para Pessoas Idosas '} 
      text={
        <>
          <p>
            Todas as pessoas com <strong>65 anos</strong> ou mais podem receber um <strong>salário</strong> mínimo por mês do INSS. 
          </p><br />
          <p>
            Para isso, basta comprovar que não têm <strong>condições</strong> de se sustentar.
          </p><br />
          <p>
            Mesmo quem <strong>nunca contribuiu</strong> ao INSS tem direito de receber esse benefício.
          </p>
        </>} 
      buttonText={'Quero ser atendido'} 
      buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+loas+bpc+geral'} 
      image={'/assets/images/aposentadoria/imageAposentadoMelhor.webp'} 
      imageClean={'/assets/images/aposentadoria/imageAposentadoMelhorClean.webp'} 
      imageDescription={'Aposentados sorrindo após aumentarem suas aposentadorias'} 
      cleanMode={true}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Benefício para Pessoas com Deficiência'} 
      text={
        <>  
          <p>
            As pessoas com deficiência também podem receber um salário mínimo mensal do INSS, independentemente da idade.
          </p><br />
          <p>
            Exemplos de condições que dão direito ao BPC-LOAS:
          </p>
        </>
      } 
      listText={[
        "Autismo",
        "Síndrome de down",
        "Deficiência visual ou auditiva",
        "Cardiopatia grave",
        "Deficiência física",
        "Dentre outras",
      ]}
      buttonText={'Quero ser atendido'} 
      buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+loas+bpc+geral'} 
      image={'/assets/images/aposentadoria/vantagemMelhorRevisao.webp'} 
      imageClean={'/assets/images/aposentadoria/vantagemMelhorRevisaoClean.webp'} 
      imageDescription={'Aposentado recebeu um valor maior de aposentadoria'} 
      invertImagePosition={true}
      cleanMode={true}
    />

    <PeopleComents 
      sectionTitle={<>Atendemos <strong>100% on-line</strong> em todo o Brasil</>}
      clientCardsTitle='O que nossos clientes dizem'
      imageUrl={'/assets/images/aposentadoria/grupoPessoas.webp'} 
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
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice.webp',
          imageDescription: 'Corredor do escritório Glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice2.webp',
          imageDescription: 'Sala de atendimento aos clientes glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice3.webp',
          imageDescription: 'Sala de atendimento aos clientes 2 glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice4.webp',
          imageDescription: 'Salas dos advogados especialistas'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice5.webp',
          imageDescription: 'Salas dos advogados especialistas'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice6.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice7.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice8.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice9.webp',
          imageDescription: 'Recepção escritório glomb advogados'
        },
        {
          imageUrl: '/assets/images/aposentadoria/escritorio/glomOffice11.webp',
          imageDescription: 'Sala de reuniões glomb advogados'
        }
      ]}
    />
    
    <PeopleSlider 
      title='Nossos profissionais'
      subTitle={<p>Nossa equipe altamente qualificada trabalha com excelência e rigor técnico para oferecer o melhor serviço.</p>}
      carrouselImages={[
        
        {
          imageUrl: '/assets/images/advogados/jose_lucio_glomb.webp',
          imageTitle: 'José Lúcio Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 6.838'
        },

        {
          imageUrl: '/assets/images/advogados/daniel_glomb.webp',
          imageTitle: 'Daniel Glomb',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 45.288'
        },
        
        {
          imageUrl: '/assets/images/advogados/angela_glomb.webp',
          imageTitle: 'Angela Glomb',
          imageSubTitle: 'Advogada',
          text: 'OAB/PR 37.004'
        },
        
        {
          imageUrl: '/assets/images/advogados/marcia_leticia_glomb.webp',
          imageTitle: 'Márcia Letícia Glomb',
          imageSubTitle: 'Advogada',
          text: 'OAB/PR 86.573'
        },
        
        {
          imageUrl: '/assets/images/advogados/cleide_glomb.webp',
          imageTitle: 'Cleide Glomb',
          imageSubTitle: 'Advogada',
          text: 'OAB/PR 26.012'
        },
        
        {
          imageUrl: '/assets/images/advogados/lucas_emmendorfer.webp',
          imageTitle: 'Lucas Emmendorfer',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 111.802'
        },
        
        {
          imageUrl: '/assets/images/advogados/rogerio_loch.webp',
          imageTitle: 'Rogério Loch',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 113.316'
        },
        
        {
          imageUrl: '/assets/images/advogados/francisco_torres.webp',
          imageTitle: 'Francisco Torres',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 45.155'
        },
        
        {
          imageUrl: '/assets/images/advogados/marcelo_mano_alves.webp',
          imageTitle: 'Marcelo Mano Alves',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 44.200'
        },
        
        {
          imageUrl: '/assets/images/advogados/andre_durdyn.webp',
          imageTitle: 'André Durdyn',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 41.300'
        },
        
        {
          imageUrl: '/assets/images/advogados/paulo_eduardo_muller.webp',
          imageTitle: 'Paulo Eduardo Müller',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 59.060'
        },
        
        {
          imageUrl: '/assets/images/advogados/guilherme_seiti.webp',
          imageTitle: 'Guilherme Seiti',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 42.351'
        },
        
        {
          imageUrl: '/assets/images/advogados/mauricio_simoes.webp',
          imageTitle: 'Maurício Simões',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 37.008'
        },
        
        {
          imageUrl: '/assets/images/advogados/jose_paulo_barcellos.webp',
          imageTitle: 'José Paulo Barcellos',
          imageSubTitle: 'Advogado',
          text: 'OAB/PR 47.112'
        }
      ]}
    />
      
  </>
  )
}

export default AposentadoriaTempoEspecial