import MyComments from "@/components/screens/profile/comments"
import { NextPageWithLayout } from "@utilities/layout.types"
import Layout from "@components/layout/Layout"
import Providers from "@/providers"

const MyCommentsPage: NextPageWithLayout = () => {
  return (
    <MyComments />
  )
}
export default MyCommentsPage

MyCommentsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Providers themeProps={MyCommentsPage.theme}>
      <Layout title="My comments">
        {page}
      </Layout>
    </Providers>
  )
}

MyCommentsPage.theme =  {
  themes: ['daisy', 'cmyk'],
} 