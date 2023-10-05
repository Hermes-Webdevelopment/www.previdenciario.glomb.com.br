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
import { gtmCaller } from '../components/scriptCaller/gtmScript';
import { clarityCaller } from '../components/scriptCaller/clarityScript';
import LogoHead from '../components/headFormats/logoHead';

const AposentadoriaTempoEspecial: NextPage = () => {

  const linkWhatsAp = 'https://glomb.legist.com.br/aposentadoria'

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
      <meta property="og:site_name" content="Blog | Glomb Advogados"/>
      <meta property='og:title' content='Você pode se aposentar antes'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/glombimagelogocache.png'/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="801"/>
      <meta property='og:image:alt' content='Aposentadoria Especial e tempo especial'/>
      <meta property='og:description' content='Quem trabalhou em atividades prejudiciais se aposenta antes e com um valor maior.'/>
      <meta property='og:url' content='https://previdenciario.glomb.com.br/aposentadoriatempoespecial/'/>
      <meta property='og:type' content='website'/>

      <title>Conquiste a melhor Aposentadoria</title>
      <meta name="keywords" content="aposentadoria especial; aposentadoria periculosidade; aposentadoria insalubridade;"></meta>
      <meta name="description" content="Quem trabalhou com periculosidade, insalubridade e atividades prejudiciais à saúde tem direito a se aposentar mais cedo e com valores maiores. Descubra como conquistar a melhor aposentadoria - s/ compromisso."></meta>
    </Head>
    
    {/* <SimpleHead 
        logo='glomb'
        btnTxt='Quero ser atendido'
        btnLink=linkWhatsAp
    /> */}

    <div className='apearDesktop'>
      <BlueButton 
          isFloating={true} 
          buttonLink={linkWhatsAp}
          buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>}
        />
    </div>

    {/* imagem desktop deve ser com width: 375px por heigh: 720px  e a mobile deve ser width: 596px por heigh: 652px*/}
    <StaticBanner 
      title="Você pode se aposentar antes"
      subTitle={<>Quem trabalhou em <strong>atividades perigosas</strong>, <strong>insalubres</strong> ou <strong>prejudiciais</strong> pode se aposentar <strong>mais cedo</strong> e com um <strong>valor maior</strong>.</>}
      buttonText="Atendemos em todo o Brasil"
      buttonLink={linkWhatsAp}
      headerDesktop='/assets/images/aposentadoria_especial/ap_sp_desk.webp'
      headerDesktopDescription="Aposentada recebeu aposentadoria maior"
      headerMobile='/assets/images/aposentadoria_especial/ap_sp_mobile.webp'
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
            Todas as pessoas que trabalharam em atividades <strong>perigosas</strong>, <strong>insalubres</strong> ou <strong>prejudiciais à saúde</strong> tem direito a uma <strong>aposentadoria antecipada</strong> e com <strong>valores maiores</strong>. 
          </p>
        </>} 
      buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>} 
      buttonLink={linkWhatsAp} 
      image={'/assets/images/aposentadoria_especial/ap_sp_mobile_1.webp'} 
      imageClean={'/assets/images/aposentadoria_especial/ap_sp_desk_1.webp'} 
      imageDescription={'Aposentados sorrindo após aumentarem suas aposentadorias'} 
      cleanMode={true}
      getCircle={[true, 3]}
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
      buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>} 
      buttonLink={linkWhatsAp} 
      image={'/assets/images/aposentadoria_especial/ap_sp_mobile_2.webp'} 
      imageClean={'/assets/images/aposentadoria_especial/ap_sp_desk_2.webp'} 
      imageDescription={'Aposentado recebeu um valor maior de aposentadoria'} 
      invertImagePosition={true}
      cleanMode={true}
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
      buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>} 
      buttonLink={linkWhatsAp} 
      image={'/assets/images/aposentadoria_especial/ap_sp_mobile_3.webp'} 
      imageClean={'/assets/images/aposentadoria_especial/ap_sp_desk_3.webp'} 
      imageDescription={'APensionista recebeu um valor maior de benefício'} 
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
      buttonLink={linkWhatsAp}
      buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>}
    />
    
    <SimpleFooter 
      logo='glomb'
      sloganTxt={<>Atendemos em todo o <strong>território nacional</strong></>}
      subTxt='Inscrição OAB nº 403'
    />
    <LogoHead />
  </>
  )
}

export default AposentadoriaTempoEspecial