import {FC, useState, useEffect, useMemo, useRef } from 'react'

import { getRenderAsString } from './svg-data.builder'
import { ITartanPattern } from './types'

import { styled } from 'styled-components'

//import Image from 'next/image'

export interface WithBackground {
  $background?: string
}


export const CoverImage = styled.div<WithBackground>`
background-size: auto;
background-repeat: repeat;
${(p) => p.$background ? 'background-image: url("' + p.$background + '")' : ''}
`

const TartanPattern:FC<ITartanPattern> = ({colors}) => {

  const [buf, setBuf] = useState<any>()
  const [pngSrc, setPngSrc] = useState('')
  const canvasRef = useRef(null)

  useEffect(() => {

    const fetchData = async () => {
        const newSvgData = await getRenderAsString(colors)      
        var newBuf = `data:image/svg+xml;base64,${btoa(newSvgData)}`
        setBuf(newBuf)
    }
    
    fetchData()
    
  }, [colors])

  useEffect(() => {

      const image = new Image
      image.src = buf
      image.onload = function () {
        
        if (canvasRef.current) {

          const canvas:HTMLCanvasElement = canvasRef.current
          const context = canvas.getContext("2d")
          canvas.setAttribute('width', `${image.width}`)
          canvas.setAttribute('height', `${image.height}`)
          
          if (context) {
            context.drawImage(image, 0, 0)
            const canvasdata = canvas.toDataURL("image/png")
            setPngSrc(canvasdata)
          }
        }
      }

  }, [buf])

  const memoizedPng = useMemo(() => pngSrc, [pngSrc])

  return (
    <div className='w-full grid grid-rows-1 grid-cols-6 gap-4'>
      <div className='col-span-4'>
        <CoverImage $background={memoizedPng} className='w-full h-40 rounded'/>
        <canvas ref={canvasRef} hidden/>
      </div>
     <div className='col-span-2'>
      <div className='w-full h-full relative'>
        <button className='btn btn-accent btn-outline btn-block absolute top-0'>Random</button>
        <button className='btn btn-accent btn-outline btn-block absolute bottom-0' disabled>Editor</button>
      </div>
     
     </div>
     
    </div>
  )
}

export default TartanPattern