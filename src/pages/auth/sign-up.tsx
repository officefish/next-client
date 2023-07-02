import SignUp from "@components/screens/auth/sign-up"
import { NextPageWithLayout } from "@utilities/layout.types"
import Layout from "@components/layout/Layout"
import Providers from '@/providers'

const SignUpPage: NextPageWithLayout = () => {
  return (
    <SignUp />
  )
}
export default SignUpPage

SignUpPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Providers themeProps={SignUpPage.theme}>
      <Layout title="Sign Up.">
        {page}
      </Layout>
  </Providers>
  )
}

SignUpPage.theme =  {
  themes: ['daisy', 'cmyk'],
} 