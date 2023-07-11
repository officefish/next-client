import MyFollowers from "@/components/screens/profile/followers"
import { NextPageWithLayout } from "@utilities/layout.types"
import Layout from "@components/layout/Layout"
import Providers from "@/providers"

const FollowersPage: NextPageWithLayout = () => {
  return (
    <MyFollowers />
  )
}
export default FollowersPage

FollowersPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Providers themeProps={FollowersPage.theme}>
      <Layout title="My followers">
        {page}
      </Layout>
    </Providers>
  )
}

FollowersPage.theme =  {
  themes: ['daisy', 'cmyk'],
} 