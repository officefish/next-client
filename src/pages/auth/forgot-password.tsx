import ForgotPassword from "@components/screens/auth/forgot-password"
import { NextPageWithLayout } from "@utilities/layout.types"
import Layout from "@components/layout/Layout"
import Providers from '@/providers'

const ForgotPasswordPage: NextPageWithLayout = () => {
  return (
    <ForgotPassword />
  )
}
export default ForgotPasswordPage

ForgotPasswordPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Providers themeProps={ForgotPasswordPage.theme}>
      <Layout title="Request Password.">
        {page}
      </Layout>
  </Providers>
  )
}

ForgotPasswordPage.theme =  {
  themes: ['daisy', 'cmyk'],
} 