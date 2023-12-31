import Profile from "@components/screens/profile"
import { NextPageWithLayout } from "@utilities/layout.types"
import Layout from "@components/layout/Layout"
import Providers from "@/providers"

const ProfilePage: NextPageWithLayout = () => {
  return (
    <Profile />
  )
}
export default ProfilePage

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Providers themeProps={ProfilePage.theme}>
      <Layout title="Profile">
        {page}
      </Layout>
    </Providers>
  )
}

ProfilePage.theme =  {
  themes: ['daisy', 'cmyk'],
} 