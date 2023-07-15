import {FC, useState, useEffect, useMemo, useRef } from 'react'

import { getTartanAsRender } from '@/services/tartan/svg-data.builder'

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

import { ITartan, ITartanPatternColors } from '@/models/profile.types'

interface ITartanPicker extends ITartan {
    setColors: (value:ITartanPatternColors) => void
    setSvgSrc: (value:string) => void
    setPngSrc: (value:string) => void
    isCollapsed: boolean
}

const TartanPicker:FC<ITartanPicker> = (props) => {

    const {
        pngSrc, setPngSrc, 
        colors, setColors,
        setSvgSrc,
        isCollapsed
    } = props

    const canvasRef = useRef(null)

    useEffect(() => {

        const fetchData = async () => {

            console.log(colors)
            
            // get svg builder render (valid <svg> html Tag )
            const newSvgData = await getTartanAsRender(colors)  
            
            console.log(newSvgData)

            // conver <svg> tag to data
            const newBuf = `data:image/svg+xml;base64,${btoa(newSvgData)}`

            setSvgSrc(newBuf)
        
            const image = new Image
            image.src = newBuf
            
            image.onload = function () {
        
                if (canvasRef.current) {
    
                    const canvas:HTMLCanvasElement = canvasRef.current
                    const context = canvas.getContext("2d")
                    canvas.setAttribute('width', `${image.width}`)
                    canvas.setAttribute('height', `${image.height}`)
            
                    if (context) {
                        context.drawImage(image, 0, 0)
                        const canvasdata = canvas.toDataURL("image/png")
                        console.log(canvasdata)
                        setPngSrc(canvasdata)
                    }
                }
            }

        }
    
        fetchData()
    
    }, [colors, isCollapsed])


 
    //const memoizedPng = useMemo(() => pngSrc, [pngSrc])

    return (
        <div className='w-full grid grid-rows-1 grid-cols-6 gap-4'>
            <div className='col-span-4'>
                <CoverImage $background={pngSrc? pngSrc : undefined} className='w-full h-40 rounded'/>
                <canvas ref={canvasRef} hidden/>
                <img src={props.svgSrc ? props.svgSrc : undefined} alt="" />
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

export default TartanPicker