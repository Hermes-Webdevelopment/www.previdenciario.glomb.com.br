import Head from 'next/head';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import React from 'react';
import parse from 'html-react-parser'

const AposentadoriaTempoEspecial: NextPage = () => {

  const [posts, setPosts] = useState<{
    content: {
      rendered: string
    }
  }[]>([])
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    fetch('https://blog.glomb.com.br/wp-json/wp/v2/posts')
    .then((response) => response.json())
    .then((data) => {
      setPosts(data)
      setLoading(false)
    })
    .catch(function (error) {
      console.log('Error during fetch: ' + error.message);
    });
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
      <meta property='og:title' content='Receba até 5 salários por mês do INSS'/>
      <meta property='og:image' itemProp='image' content='https://previdenciario.glomb.com.br/assets/images/glombimagelogocache.png'/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="801"/>
      <meta property='og:image:alt' content='Pensão por morte'/>
      <meta property='og:description' content='Dependentes de trabalhador ou aposentado falecido podem receber uma pensão mensal do INSS.'/>
      <meta property='og:url' content='https://previdenciario.glomb.com.br/pensaopedido/'/>
      <meta property='og:type' content='website'/>

      <title>Receba pensão de até R$ 7.500 por mês do INSS</title>
      <meta name="keywords" content="pensão por morte; pensão por morte vitalícia; pedir pensão por morte"></meta>
      <meta name="description" content="Familiares de pessoa falecida podem receber uma pensão mensal do INSS. Avalie seu caso s/ compromisso e conquiste sua pensão por morte."></meta>
    </Head>
    <h1>BLOG</h1>
    <div>
      {
        !loading && posts.length >= 1 ?
          posts.map((post) => {
            return parse(post.content.rendered, {
              transform: (reactNode, domNode, index) => {
                // this will wrap every element in a div
                return <React.Fragment key={Math.random()}><>{reactNode}</></React.Fragment>;
              }
            });

          })
        :
        <p>Carregando ...</p>

      }
    </div>
  </>
  )
}

export default AposentadoriaTempoEspecial