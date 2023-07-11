import ProfileSettings from "@/components/screens/profile/settings"
import { NextPageWithLayout } from "@utilities/layout.types"
import Layout from "@components/layout/Layout"
import Providers, {ProfileSettingsProvider} from "@/providers"

const ProfilePage: NextPageWithLayout = () => {
  return (
    <ProfileSettings />
  )
}
export default ProfilePage

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Providers themeProps={ProfilePage.theme}>
      <ProfileSettingsProvider>
        <Layout title="Profile">
          {page}
        </Layout>
      </ProfileSettingsProvider>
    </Providers>
  )
}

ProfilePage.theme =  {
  themes: ['daisy', 'cmyk'],
} 