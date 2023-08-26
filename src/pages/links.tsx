import Head from 'next/head';
import type { NextPage } from 'next';
import Image from 'next/image';
import LinksBanner from '../components/linksBanner';
import SocialMediaLink from '../components/atons/socialMediaLink';
import LinksList from '../components/linksList';

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

      <LinksList 
        imageTop='/assets/images/links/imageTop.webp'
        altImageTop=''
        imageBottom='/assets/images/links/imageBotton.webp'
        altImageBottom=''
        linkArray={[{
            imageButton:'/assets/images/links/aposentadoria.webp',
            imageButtonAlt:'',
            buttonTextTitle:'Aposentadoria',
            buttonText:'Avalie seu caso sem compromisso',
            buttonLink:'/'
          },{
            imageButton:'/assets/images/links/revisao.webp',
            imageButtonAlt:'',
            buttonTextTitle:'Revisão da Vida Toda',
            buttonText:'Avalie seu caso sem compromisso',
            buttonLink:'/'
          },{
            imageButton:'/assets/images/links/rural.webp',
            imageButtonAlt:'',
            buttonTextTitle:'Aposentadoria Rural',
            buttonText:'Avalie seu caso sem compromisso',
            buttonLink:'/'
          }
        ]}
        socialMediaArray= {[{
            icon: 'instagram',
            link: ''
          },{
            icon: 'facebook',
            link: ''
          },{
            icon: 'youtube',
            link: ''
          }
        ]}
      />
      
    </>
  
  )
}

export default AposentadoriaTempoEspecial