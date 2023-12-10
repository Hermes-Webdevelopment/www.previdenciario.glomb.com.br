import Head from 'next/head'
import type { NextPage } from 'next'
import WordsBanner from '../components/banners/wordsBanner'
import OurServices from '../components/ourServices'
import GrowingNumber from '../components/growingNumber'
import Map from '../components/map'
import { useEffect, useState } from 'react'
import { gtmCaller } from '../components/scriptCaller/gtmScript'
import { clarityCaller } from '../components/scriptCaller/clarityScript'
import PeopleSlider from '../components/PeopleSlider'
import BlogSlider from '../components/galeries/blogSlider'
import SimpleFooter from '../components/footerFormats/simpleFooter'
import BlueButton from '../components/atons/blueButton'
import ImageSlider from '../components/galeries/imageSlider'
import ClientsCommentsSlider from '../components/comentsSlider'

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

      <div className='apearDesktop'>
          <BlueButton 
            isFloating={true} 
            buttonLink={linkWhatsAp}
            buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>}
          />
      </div>

      <WordsBanner 
        title={'Transformar vidas por meio da Justiça é nossa'} 
        text={
          <>
            <p>Trabalhamos de maneira incansável para <strong>promover</strong> e <strong>defender</strong> seus direitos. <br />
            Vemos a <strong>justiça</strong> como um <strong>instrumento de transformação</strong> social e, por isso, reafirmamos diariamente o propósito de <strong>transformar vidas</strong> por meio do nosso trabalho.<br />
            Não somos meros advogados, somos agentes de transformação vocacionados a defender pessoas e <strong>efetivar a justiça.</strong><br />
            Por isso, somos <strong>referência em serviços jurídicos.</strong></p>
            <p> Atendemos em todo o <strong>Brasil.</strong><br />
            Fale já com nossos <strong>advogados especialistas.</strong></p>
          </>} 
        img={'/assets/images/home/recepcao-do-escritorio-glomb-advogados.webp'} 
        imgMobile={'/assets/images/home/recepcao-do-escritorio-glomb-advogados-mobil.webp'} 
        imgAlt={'Escritório de advocacia de direito previdenciário e direito do trabalho localizado no centro de Curitiba. Balcão da recepção branco com a logo do escritório ao fundo em uma parede de mármore.'} 
        buttonText={'Quero ser atendido'} 
        buttonLink={'/'}        
      />
      
      <OurServices 
        title1={'Nossos Serviços'}
        link1={'/'}
        text1={<>
          Somos um <strong>escritório de advocacia</strong> focado na <strong>excelência</strong> desde o atendimento à técnica jurídica.<br />
          Nossa <strong>missão</strong> é proporcionar a <strong>melhor experiência</strong> na prestação de serviços, buscando <strong>soluções ágeis</strong> e <strong>eficientes</strong> para <strong>defender</strong> seus direitos.
        </>}
        title2={'Direito do Trabalho'}
        link2={'/'}
        text2={<>Atuamos de forma ampla na <strong>defesa</strong> dos seus <strong>direitos trabalhistas</strong>, focados em promover <strong>justiça e equilíbrio</strong> nas relações de trabalho.</>}
        title3={'Direito Previdenciário'}
        link3={'/'}
        text3={<>Defendemos seu <strong>direito</strong> aos benefícios da <strong>Previdência Social</strong>. Conte com nossa experiência para <strong>conquistar</strong> uma vida mais estável e segura.</>} 
        bgimg1={'/assets/images/home/recepcao-do-escritorio-advocacia-direto-previdenciario-e-direito-do-trabalho.webp'} 
        bgimg2={'/assets/images/home/melhor-advogado-direto-trabalhista-do-brasil.webp'} 
        bgimg3={'/assets/images/home/melhor-advogado-direto-previdenciario-do-brasil.webp'}     
      />
    {shown &&
      <>
        <GrowingNumber 
          title={'Há mais de 46 anos transformando vidas'}
          text={<>Temos a satisfação de contribuir com a sociedade e <strong>transformar vidas</strong> por meio da justiça há mais de 46 anos.</>}
          years={'42'}
          yearsText={'+ anos de atuação'}
          clients={'23125'}
          clientsText={'+ clientes atendidos'}
        />

        <PeopleSlider 
          title='Nossos profissionais'
          subTitle={<p>Para nós, trabalhar com <strong>justiça</strong> não é apenas um ofício mas uma forma de <strong>transformar o mundo, melhorando</strong> a vida de milhares de pessoas.Por isso, contamos com uma equipe altamente <strong>qualificada</strong>, movida por um forte senso de <strong>propósito, excelência e rigor técnico</strong> para defender seus direitos.</p>}
          carrouselImages={[
            
            {
              imageUrl: '/assets/images/advogados/jose-lucio-glomb-advogado-direito-do-trabalho.webp',
              imageTitle: 'José Lúcio Glomb',
              imageAlt: 'José Lúcio Glomb, advogado, OAB/PR 6.838. Conselheiro Federal da OAB, Ex-presidente do Instituto dos Advogados do Paraná - IAP e Presidente da OAB/PR de 2010 a 2012. Advogado de cabelos brancos, óculos de grau, terno azul e gravata vermelha.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 6.838'
            },
            
            {
              imageUrl: '/assets/images/advogados/angela-glomb-advogada-direito-do-trabalho.webp',
              imageTitle: 'Angela Glomb',
              imageAlt: 'Angela Glomb, advogada, OAB/PR 37.004, OAB/SP 294.679, com vasta experiência em direito do trabalho, pós-graduada pela Pontifícia Universidade Católica de São Paulo - PUC/SP',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 37.004'
            },

            {
              imageUrl: '/assets/images/advogados/daniel-glomb-advogado-direito-do-trabalho-direito-previdenciario.webp',
              imageTitle: 'Daniel Glomb',
              imageAlt: 'Daniel Glomb, advogado, OAB/PR 45.288, OAB/SP 294.685, especialista em deireito do trabalho e da Seguridade Social pela Universidade de São Paulo - USP.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 45.288'
            },
            
            {
              imageUrl: '/assets/images/advogados/marcia-glomb-advogada.webp',
              imageTitle: 'Márcia Letícia Glomb',
              imageAlt: 'Márcia Glomb, advogada, OAB/PR 86.573, especialista em direito trabalhista e formada em Administração de Empresas pela FAE Business School.',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 86.573'
            },
            
            {
              imageUrl: '/assets/images/advogados/andre-durdyn-advogado-trabalhista.webp',
              imageTitle: 'André Durdyn',
              imageAlt: 'André Durdyn, advogado, OAB/PR 41.300, formado em direito pela Pontifícia Universidade Católica - PUC/PR, especialista em direito do trabalho.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 41.300'
            },
            
            {
              imageUrl: '/assets/images/advogados/francisco-torres-advogado-trabalhista.webp',
              imageTitle: 'Francisco Torres',
              imageAlt: 'Francisco Torres, advogado, OAB/PR 45.155 especialista em direito do trabalho e da seguridade social pela EMATRA/PR.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 45.155'
            },
            
            {
              imageUrl: '/assets/images/advogados/lucas-emmendorfer-advogado-previdenciarista.webp',
              imageTitle: 'Lucas Emmendorfer',
              imageAlt: 'Lucas Henrique Emmendorfer, OAB/PR 111.802, advogado formado pela Universidade Federal do Paraná, especializado em direito previdenciário e previdência social.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 111.802'
            },
            
            {
              imageUrl: '/assets/images/advogados/rogerio-loch-advogado-previdenciario.webp',
              imageTitle: 'Rogério Loch',
              imageAlt: ' Rogério Loch, OAB/PR 113.316, advogado especialista em direito previdenciário, pós-graduado pela ESMAFE/PR.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 113.316'
            },
            
            {
              imageUrl: '/assets/images/advogados/regiani-aparecida-correia-advogada-previdencia-social.webp',
              imageTitle: 'Regiane Aparecida Correia',
              imageAlt: 'Regiani Aparecida Correia, OAB/PR 89.032, advogada especialista em direito previdenciário.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 89.032'
            },
            
            {
              imageUrl: '/assets/images/advogados/marcelo-mano-alves-advogado-trabalhista.webp',
              imageTitle: 'Marcelo Mano Alves',
              imageAlt: 'Marcelo Mano Alves, OAB/PR 44.200, advogado especialista em direito do trabalho e da Seguridade Social.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 44.200'
            },
            
            {
              imageUrl: '/assets/images/advogados/mauricio-simoes-advogado.webp',
              imageTitle: 'Maurício Simões',
              imageAlt: 'Maurício Simões, OAB/PR 37.008, OAB/SP 230.915-A, especialista em direito e processo do trabalho.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 37.008'
            },
            
            {
              imageUrl: '/assets/images/advogados/cleide-glomb.webp',
              imageTitle: 'Cleide Glomb',
              imageAlt:'Cleide Glomb, advogada, OAB/PR 26.012, OAB/SP 294.683, especializada em direito previdenciário e processo do trabalho.',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 26.012'
            },
            
            {
              imageUrl: '/assets/images/advogados/raphaela-mattana.webp',
              imageTitle: 'Raphaela Mattana',
              imageAlt:'Raphaela Mattana, advogada, OAB/PR 120.190, direito do trabalho.',
              imageSubTitle: 'Advogada',
              text: 'OAB/PR 120.190'
            },
            
            {
              imageUrl: '/assets/images/advogados/guilherme-seiti.webp',
              imageTitle: 'Guilherme Seiti',
              imageAlt: 'Guilherme Seiti, advogado, OAB/PR 42.351, especialista em direito do trabalho.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 42.351'
            },
            
            {
              imageUrl: '/assets/images/advogados/paulo-eduardo-muller.webp',
              imageTitle: 'Paulo Eduardo Müller',
              imageAlt: 'Paulo Eduardo Muller, advogado, OAB/PR 59.060, especialista em direito do trabalho e direito previdenciário.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 59.060'
            },
            
            {
              imageUrl: '/assets/images/advogados/jose-paulo-barcellos.webp',
              imageTitle: 'José Paulo Barcellos',
              imageAlt: 'José Paulo Barcellos, advogado, OAB/RJ 47.112.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 47.112'
            },
            
            {
              imageUrl: '/assets/images/advogados/fabiano-araujo.webp',
              imageTitle: 'Fabiano Araújo',
              imageAlt: 'Fabiano Araújo, advogado, OAB/PR 44.240.',
              imageSubTitle: 'Advogado',
              text: 'OAB/PR 44.240'
            }
          ]}
          buttonLink={linkWhatsAp}
          buttonText={<><strong>Quero ser atendido</strong> sem compromisso</>}
        />

        <ImageSlider 
          title={'O Escritório'} 
          text={
            <>
              <p>
                Temos uma <strong>estrutura completa</strong> para atender em <strong>todo o Brasil</strong>, sempre com foco na satisfação do cliente.<br />
                Independentemente do Estado em que você mora, estamos preparados para atendê-lo à distância com a mesma <strong>qualidade, dedicação, eficiência e resultados</strong> práticos.
              </p>
              <p>
                Revolucionamos a forma de fazer advocacia, focando em um <strong>atendimento sem burocracias</strong>, que coloca o <strong>cliente em primeiro lugar</strong> e lhe permite <strong>entender</strong> com clareza seus direitos e como efetivá-los.<br />
                Nossos clientes de norte a sul do país atestam a <strong>qualidade</strong> dos nossos serviços.
              </p>
              <p>
                Conte conosco para <strong>defender seus direitos sem burocracias</strong>, com <strong>transparência</strong>, <strong>eficiência</strong>, <strong>humanismo</strong> e obstinada <strong>dedicação</strong>.
              </p>
            </>
          } 
          images={[
            {
              img: '/assets/images/home/1-escritorio-advocacia-especializado-INSS-direito-trabalhista-previdenciario-melhor-do-brasil.webp',
              altImg: 'Sala de reuniões sofisticada com ar-condicionado, mesa de madeira, com 12 lugares e paredes forradas com painéis de madeira, localizado em Curitiba - Paraná.'
            },
            {
              img: '/assets/images/home/1-melhor-escritorio-advocacia-brasil-direito-previdenciario-trabalhista.webp',
              altImg: 'Recepção do escritório Glomb Advogados, advocacia especializada em direito do trabalho e previdência social. Entrada com piso de mármore, balcão branco e cadeiras de couro modernas.'
            },
            {
              img: '/assets/images/home/1-escritorio-advogado-especializado-direito-trabalhista-previdenciario-INSS.webp',
              altImg: 'Entrada do escritório de advocacia Glomb Advogados, maior especialista em direito do trabalho e direito previdenciário do Brasil. Balcão da recepção branco com uma parede de mármore atrás e a logo do escritório.'
            },
            {
              img: '/assets/images/home/1-melhor-escritorio-de-advocacia-do-brasil-direito-previdenciario-trabalhista.webp',
              altImg: 'Recepção do escritório de advocacia Glomb & Advogados Associados, especializado em direito do trabalho e previdenciário. Piso em mármore claro, com cadeiras brancas modernas e paredes com painéis de madeira.'
            },
            {
              img: '/assets/images/home/1-sala-de-atendimento-advocacia-especializada-em-aposentadoria-INSS.webp',
              altImg: 'Sala de atendimento com vista para a cidade de Curitiba, sacada com plantas, mesa redonda de madeira e estante com livros de Direito.'
            },
            {
              img: '/assets/images/home/1-sala-dos-advogados-especialistas-em-direito-do-trabalho-e-previdenciario.webp',
              altImg: 'Sala ampla com painéis de madeira, piso em carpet cinza, mesas com computadores e outras salas em volta.'
            },
            {
              img: '/assets/images/home/1-advocacia-previdenciarista-curitiba.webp',
              altImg: 'Corredor que divide as salas de atendimento, com piso em carpet cinza, salas de vidro com persianas e portas de madeira.'
            },
            {
              img: '/assets/images/home/1-sala-de-atendimento-advocacia-especializada-em-direito-trabalhista.webp',
              altImg: 'Sala de atendimento interna com paredes de vidro e persianas, mesa redonda de madeira e balcão preto com planta.'
            },
            {
              img: '/assets/images/home/1-advogado-especialista-em-direito-previdenciario-melhor-do-brasil.webp',
              altImg: 'Corredor com os elevadores no 19 andar no edifício Universe em Curitiba/PR. A área do escritório contempla o andar inteiro.'
            },
            {
              img: '/assets/images/home/1-advogado-INSS-beneficios-previdencia-social.webp',
              altImg: 'corredor do escritório Glomb Advogados, que liga a parte da controladoria de processos judiciais ao setor jurídico. paredes em petit pavê, com vasos de bambu e piso de mármore.'
            },
          ]} 
        />
        
        <ClientsCommentsSlider 
          title={'O que nossos clientes dizem'}
          subTitle={'Nota 4.9 de 5.0 no Google'}
          clientsComentCard={[
            {
              title: 'Excelentes profissionais',
              text:'Excelentes profissionais, muito atenciosos e competentes. Sanaram todas as minhas dúvidas, suprindo as expectativas.',
              starNumber:5,
              clientName:'Marines Gai - PR - Curitiba'
            },
            {
              title: 'Muito bom',
              text:'Muito bom! Plataforma bem fácil, clara e objetiva. O atendimento celular foi cordial e muito profissional. Muito obrigado a todos envolvidos no trabalho.',
              starNumber:5,
              clientName:'William Fabrício de Oliveira - PR - Curitiba'
            },
            {
              title: 'Muito atenciosos',
              text:'Muito atenciosos. Fiquei satisfeita com o atendimento.',
              starNumber:5,
              clientName:'Shirley Ribeiro da Costa - PR - Curitiba'
            },
            {
              title: 'Muito bem atendido',
              text:'Fui muito bem atendido nota 20!',
              starNumber:5,
              clientName:'Dicezar Gomes - PR - Curitiba'
            },
            {
              title: 'Estão de parabéns',
              text:'Essa equipe da Glomb Advogados é ótima. Rapidinho me deu resposta do que eu precisava, estão de parabéns. Muito obrigada.',
              starNumber:5,
              clientName:'Selma Januaria da Silva - PR - Curitiba'
            },
            {
              title: 'Ótimo!',
              text:'Ótimos profissionais, super respeitosos, focados em atender o cliente com excelência.',
              starNumber:5,
              clientName:'Matilde Reami Rodrigues - PR - Curitiba'
            },
            {
              title: 'Extremamante qualificados',
              text:'Renomado escritório de advocacia com profissionais extremamente qualificados e sérios.',
              starNumber:5,
              clientName:'Marcos Aurélio Padilha - PR - Curitiba'
            },
            {
              title: 'Atendimento excelente',
              text:'Ótimo escritório com atendimento excelente. Super indico para quem está procurando um serviço de qualidade.',
              starNumber:5,
              clientName:'Gabriela Fialho - PR - Curitiba'
            }
          ]}
        />

        <BlogSlider 
          title='Entenda seus direitos'
          btnText='Acessar Blog'
          btnLink='/'
          blogPosts={[
            {
              img:'/assets/images/home/office.jpg',
              imgaAlt:'teste',
              postTitle:'Revisão da Vida Toda pode aumentar 5x sua Aposentadoria',
              postText: 'A Revisão da Vida Toda pode aumentar em até 5x o valor de sua Aposentadoria ou Pensão. Descubra como.',
              actionBtn:'Ver mais'
            },{
              img:'/assets/images/home/office.jpg',
              imgaAlt:'teste',
              postTitle:'Guia Completo do Auxílio-Acidente',
              postText: 'Auxílio-acidente: O que é? quem tem direito? qual o valor? como conseguir? qual a duração? como funciona o auxílio-acidente.',
              actionBtn:'Ver mais'
            },{
              img:'/assets/images/home/office.jpg',
              imgaAlt:'teste',
              postTitle:'Tudo sobre Benefício Assistencial (LOAS)',
              postText: 'Nesse artigo explicamos o que é, quem tem direito e como funciona o Benefício Assistencial ou BPC (Benefício de Prestação Continuada) - LOAS.',
              actionBtn:'Ver mais'
            }
          ]}
        />

        <Map />
        {shown &&
          <SimpleFooter 
            logo='glomb'
            sloganTxt={<>Atendemos em todo o <strong>território nacional</strong></>}
            subTxt='Inscrição OAB nº 403'
            callToAction={true}
            callTitle='Avalie seu caso em 1 minuto'
            callText='Avalie seu caso sem compromisso e descubra seus direitos.'
            callBtnLink='callBtnLink'
            callBtnText='Avalie meu caso'
          />
        }
      </>
    }
  </>
  )
}

export default Home
