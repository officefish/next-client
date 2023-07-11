import MyPosts from "@/components/screens/profile/posts"
import { NextPageWithLayout } from "@utilities/layout.types"
import Layout from "@components/layout/Layout"
import Providers from "@/providers"

const MyPostsPage: NextPageWithLayout = () => {
  return (
    <MyPosts />
  )
}
export default MyPostsPage

MyPostsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Providers themeProps={MyPostsPage.theme}>
      <Layout title="My posts">
        {page}
      </Layout>
    </Providers>
  )
}

MyPostsPage.theme =  {
  themes: ['daisy', 'cmyk'],
} 