import Layout from '../components/Layout/Layout'
import GenericLP from '../components/GenericLP/Layout'
import Assesmments from '../components/Assesmment/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {

  if (router.pathname.startsWith('/lp/blanchard-generic-landing-page')) {

    return (
        <GenericLP>
            <Component {...pageProps} />
        </GenericLP>
    )

}

else if (router.pathname.startsWith('/lp/blanchard-generic-test')) {

  return (
      <GenericLP>
          <Component {...pageProps} />
      </GenericLP>
  )

}

else if (router.pathname.startsWith('/lp/team-leadership-training-lp')) {

  return (
      <GenericLP>
          <Component {...pageProps} />
      </GenericLP>
  )

}

else if (router.pathname.startsWith('/lp/self-leadership-training-lp')) {

  return (
      <GenericLP>
          <Component {...pageProps} />
      </GenericLP>
  )

}

else if (router.pathname.startsWith('/assessments')) {

  return (
      <Assesmments>
          <Component {...pageProps} />
      </Assesmments>
  )

}

else {
  return (
    <Layout>    
    <Component {...pageProps} />
    </Layout>
  )
}
}

export default MyApp
