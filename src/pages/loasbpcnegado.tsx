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
      <meta property='og:title' content='LOAS-BPC negado tem solução'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/glombimagelogoc.png'/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="801"/>
      <meta property='og:image:alt' content='LOAS-BPC negado INSS'/>
      <meta property='og:description' content='O INSS nega 3 em cada 4 pedidos, mesmo para quem tem direito. Então, se o seu pedido foi negado, não se preocupe! Seu problema tem solução.'/>
      <meta property='og:url' content='https://previdenciario.glomb.com.br/loasbpcnegado/'/>
      <meta property='og:type' content='website'/>

      <title>LOAS-BPC negado tem solução</title>
      <meta name="keywords" content="benefício de prestação continuada, loas, bpc, bpc indeferido o que fazer, bpc negado por renda per capita, loas negado como recorrer"></meta>
      <meta name="description" content="O INSS nega 3 em cada 4 pedidos, mesmo para quem tem direito. Então, se o seu pedido foi negado, não se preocupe! Seu problema tem solução."></meta>
    </Head>
                    
    {/* <SimpleHead 
        logo='glomb'
        btnTxt='Quero ser atendido'
        btnLink='https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+loas+bpc+negado'
    /> */}

    <div className='apearDesktop'>
      <BlueButton 
          isFloating={true} 
          buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+loas+bpc+negado'}
          buttonText={'Quero ser atendido'}
        />
    </div>

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="LOAS-BPC indeferido tem solução"
      subTitle={<>O INSS nega 3 em cada 4 pedidos de benefício, mesmo para quem tem direito.<br />
                  Então, se o seu pedido foi negado, não se preocupe!
                </>}
      buttonText="Atendemos em todo o Brasil"
      buttonLink="https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+loas+bpc+negado"
      headerDesktop='/assets/images/loas_bpc_negada/loas_n_desk.webp'
      headerDesktopDescription="LOAS-BPC negado"
      headerMobile='/assets/images/loas_bpc_negada/loas_n_mobile.webp'
      headerMobileDescription="LOAS-BPC negado"
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
      title={'Você pode ter direito ao LOAS-BPC'} 
      text={
        <>
          <p>
            É comum que INSS negue a <strong>maioria</strong> dos pedidos de benefício mesmo nos casos em que <strong>existe</strong> o <strong>direito de receber</strong>. 
          </p>
          <p>
            De janeiro a março de 2022, o INSS negou <strong>3 em cada 4</strong> pedidos que foram feitos, conforme dados do boletim estatístico da previdência social.
          </p>
          <p>
            Por isso, mesmo se seu pedido foi negado, você ainda pode <strong>conquistar</strong> seu LOAS-BPC.
          </p>
        </>} 
      buttonText={'Quero ser atendido'} 
      buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+loas+bpc+negado'} 
      image={'/assets/images/loas_bpc_negada/loas_n_mobile_1.webp'} 
      imageClean={'/assets/images/loas_bpc_negada/loas_n_desk_1.webp'} 
      imageDescription={'Aposentados sorrindo após aumentarem suas aposentadorias'} 
      cleanMode={true}
    />

    {/* imagem deve ser com width: 560px por heigh: 315px */}
    <InsideTopics 
      title={'Como conquistar seu LOAS-BPC'} 
      text={
        <>  
          <p>
            Após a resposta negativa do INSS, é possível fazer um recurso administrativo. 
          </p>
          <p>
            Porém, esse recurso é demorado e na maioria dos casos o INSS nega o pedido mais uma vez.
          </p>
          <p>
            Por isso, a <strong>melhor forma</strong> de reverter a decisão do INSS é por meio de uma <strong>ação</strong> na justiça e receber todos os <strong>valores atrasados</strong> desde a data do pedido, com juros e correção.
          </p>
        </>
      } 
      buttonText={'Quero ser atendido'} 
      buttonLink={'https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+loas+bpc+negado'} 
      image={'/assets/images/loas_bpc_negada/loas_n_mobile_2.webp'} 
      imageClean={'/assets/images/loas_bpc_negada/loas_n_desk_2.webp'} 
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
      buttonLink='https://wa.me/554132239132?text=Gostaria+de+saber+mais+sobre+aposentadoria+loas+bpc+negado'
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