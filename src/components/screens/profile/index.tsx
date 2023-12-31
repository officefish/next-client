import { FC } from "react"
import { useUser } from "@services/user.service"
import { StaticImageData } from "next/image"

import {
    Cover,
    ProfileLayout,
    Header,
    BasicInfo,
    ProfileQuote,
    ResentActivities
} from "./components"

import { IBasicInfo, IHeaderStatsData } from "@/models/profile.types"

import { 
    ProfileDelimeter
 } from "./styled-profile"


const basicInfoData:IBasicInfo = {
    fullName: {
      firstName: "Sergey",
      secondName: "Inozemcev"
    },
    location: {
      country: "Russia",
      region:"Saint-Petersbourg"
    },
    career: {
      company: "Techies",
      role: "Independent developer"
    },
    education: {
      university: "University of Culture and Art",
      faculty: "Multimedia producer"
    }
}

const quoteData = `
An artist of considerable range, Jenna the name taken by
Melbourne-raised, Brooklyn-based Nick Murphy writes,
performs and records all of his own music, giving it a
warm, intimate feel with a solid groove structure. An
artist of considerable range.
`

import avatar from '@public/team-2-800x800.jpg'

const background = "https://images.unsplash.com/photo-1499336315816-097655dcfbda"

const headerData:IHeaderStatsData = {
    followers: 22,
    posts: 12,
    comments: 108
}


const Profile:FC = () => {

  const {user, mutate} = useUser()

  return (
    <>
    {user 
        ? <div className="relative">
              <Cover background={background} />
              <ProfileLayout avatar={avatar}>
                  <Header stats={headerData}/>
                  <BasicInfo data={basicInfoData} />
                  <ProfileDelimeter />
                  <ProfileQuote value={quoteData}/>
                  <ResentActivities />
              </ProfileLayout>
          </div>
        : <div>
          You need to be authorized!
        </div>
    }   
    </>
  )
}
export default Profile

