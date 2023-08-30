import Head from 'next/head';
import type { NextPage } from 'next';
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
        <meta property="og:locale" content="pt_BR"/>
        <meta property="og:site_name" content="Blog | Glomb Advogados"/>
        <meta property='og:title' content='Sofreu acidente? Receba um valor do INSS'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/glombimagelogo.png'/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="801"/>
        <meta property='og:image:alt' content='Auxílio acidente'/>
        <meta property='og:description' content='Quem sofreu acidente e ficou com dificuldade para trabalhar pode receber um valor mensal do INSS.'/>
        <meta property='og:url' content='https://previdenciario.glomb.com.br/auxilioacidentepedido/'/>
        <meta property='og:type' content='website'/>

        <title>Sofreu acidente? Receba um valor do INSS</title>
        <meta name="keywords" content="auxilio acidente, auxilio acidente inss, auxilio doença acidentario, valor do auxílio doença acidentário, sequela permanente inss, valor do auxílio acidente"></meta>
        <meta name="description" content="Sofreu acidente e tem dificuldade para trabalhar? Receba um valor mensal do INSS."></meta>
      </Head>

      <LinksList 
        imageTop='/assets/images/links/imagemTopC.webp'
        altImageTop=''
        imageBottom='/assets/images/links/imagemBottomC.webp'
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