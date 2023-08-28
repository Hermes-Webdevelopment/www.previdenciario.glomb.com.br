import Head from 'next/head';
import type { NextPage } from 'next';
import LinksBanner from '../components/linksBanner';

const AposentadoriaTempoEspecial: NextPage = () => {
  
return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Hermes TI"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Image shared in web social links */}
        <meta property='og:title' content='Sofreu acidente? Receba um valor do INSS'/>
        <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/aposentadoria/cover.png'/>
        <meta property='og:image:alt' content='Auxílio acidente'/>
        <meta property='og:description' content='Quem sofreu acidente e ficou com dificuldade para trabalhar pode receber um valor mensal do INSS.'/>
        <meta property='og:url' content='https://previdenciario.com.br/auxilioacidentepedido/'/>
        <meta property='og:type' content='website'/>

        <title>Sofreu acidente? Receba um valor do INSS</title>
        <meta name="keywords" content="auxilio acidente, auxilio acidente inss, auxilio doença acidentario, valor do auxílio doença acidentário, sequela permanente inss, valor do auxílio acidente"></meta>
        <meta name="description" content="Sofreu acidente e tem dificuldade para trabalhar? Receba um valor mensal do INSS."></meta>
      </Head>

      <LinksBanner 
        title='Obrigado!'
        image='/assets/images/agradecimento/banner.webp'
        imageMobile='/assets/images/agradecimento/bannerMobileCache.webp'
        imageAlt='Pessoas felizes agradecendo'
        text={<>Já estamos analisando seu caso.<br/> Em breve nossos especialistas entrarão em contato para indicar como conquistar seus direitos.</>}
        socialMediaArray={[
          {
            icon:'blog',
            name:'Blog',
            link: ''
          },
          {
            icon:'site',
            name:'Site',
            link: ''
          },
          {
            icon:'instagram',
            name:'Instagram',
            link: ''
          }
        ]}
      />
      
    </>
  
  )
}

export default AposentadoriaTempoEspecial