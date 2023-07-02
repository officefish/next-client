import { NextPageWithLayout } from "@utilities/layout.types"
import Layout from "@components/layout/Layout"
import Home from "@components/screens/home/home"

import Providers from '@/providers'

const HomePage: NextPageWithLayout = () => {
  return (
    <Home />
  )
}
export default HomePage

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Providers themeProps={HomePage.theme}>
      <Layout title="Home" description="Resent posts.">
        {page}
      </Layout>
    </Providers>
  )
}

HomePage.theme = {
  themes: ['daisy', 'cmyk'],
}

