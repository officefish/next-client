

import tw from "tailwind-styled-components"

export const PreviewContainer = tw.div`
relative
overflow-x-auto
rounded-tr-box 
rounded-b-box 
bg-base-300
dark:bg-base-300-dark 
`

export const Preview = tw.div`
preview 
flex 
flex-wrap 
items-center 
justify-center 
gap-2 
overflow-x-hidden 
min-h-[6rem] 
min-w-[18rem] 
max-w-4xl 
border 
bg-cover 
bg-top 
rounded-b-box 
rounded-tr-box 
border-base-300 
bg-base-200 
dark:border-base-300-dark 
dark:bg-base-200-dark 
p-4 
`

