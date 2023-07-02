import { FC, useState,  useEffect } from "react"

import ColorScheme from "./color-scheme"

type Props = {}
const ColorSchema: FC = (props: Props) => {

  return (
    <div className="mt-24 oft-col">
        <ColorScheme />
    </div>
    
  )
}

export default ColorSchema