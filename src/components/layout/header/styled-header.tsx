import tw from "tailwind-styled-components"

export const StyledHeader = tw.header`
fixed z-50 
top-0 left-0 
w-full h-16
shadow-lg shadow-gray-900
flex items-start justify-between  
text-base-content
dark:text-base-content-dark
bg-base-300
dark:bg-base-300-dark
`

export const HeaderOffset = tw.div`h-16`

export const HeaderDescriptionWrapper = tw.div`
h-12
pl-4 
flex
items-end 
justify-end
`

interface WithFontFamily {
    $fontFamily?: string;
}

export const HeaderDescription = tw.div<WithFontFamily>`
text-base 
ml-2 
font-normal 
cursor-default 
whitespace-nowrap
text-base-content/50
dark:text-base-content-dark/50
${(p) => p.$fontFamily? "font-" + p.$fontFamily : ""}
`

export const StyledHeaderNavigation = tw.div<WithFontFamily>`
flex 
flex-row 
justify-end items-end 
h-[3.8rem] pr-8
text-base-content/50
dark:text-base-content-dark/50
${(p) => p.$fontFamily? "font-" + p.$fontFamily : ""}
`

export const StyledDropdown = tw.div`dropdown dropdown-end`

export const StyledButton = tw.button`
btn 
normal-case 
btn-ghost
text-base-content/50 
dark:text-base-content-dark/50
`
export const DropdownButton = tw(StyledButton)`gap-2`

export const DropdownContent = tw.div`
dropdown-content 
top-px max-h-96 
h-[70vh] w-52 
overflow-y-auto 
mt-14
rounded-t-box rounded-b-box 
shadow-2xl 
bg-base-200 
text-base-content 
dark:bg-base-200-dark 
dark:text-base-content-dark
`