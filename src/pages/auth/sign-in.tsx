import SignIn from "@components/screens/auth/sign-in"
import { NextPageWithLayout } from "@utilities/layout.types"
import Layout from "@components/layout/Layout"
import Providers from '@/providers'

const SignInPage: NextPageWithLayout = () => {
  return (
    <SignIn />
  )
}
export default SignInPage

SignInPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Providers themeProps={SignInPage.theme}>
      <Layout title="Sign In.">
        {page}
      </Layout>
    </Providers>
   
  )
}

SignInPage.theme =  {
  themes: ['daisy', 'cmyk'],
} 