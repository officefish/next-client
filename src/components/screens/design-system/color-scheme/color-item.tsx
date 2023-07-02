import {FC, useState, useRef, useEffect } from 'react'

interface ColorItemProps {
    tag: string
}

const ColorItem: FC<ColorItemProps> = ({tag}) => {
    const [backgroundColor, setBackgroundColor] = useState('')
    const elementRef = useRef(null)

    useEffect(() => {
        const divElement = elementRef.current
        if (divElement) {
            const bg = window.getComputedStyle(divElement, null).getPropertyValue("background-color")
            setBackgroundColor(bg)    
        }
    }, [])

    return (
        <div className='flex flex-col w-full items-start bg-slate-50 border border-slate-600'>
            <div ref={elementRef} className={`w-full h-12 bg-${tag} border-b border-slate-600 `}></div>
            <div className='bg-slate-200 w-full '>
                <p className='text-xs px-2 py-1'>{backgroundColor}</p>
                <p className='text-xs px-2 py-1'>{tag}</p>
            </div>
        </div>
    )
}
  
export default ColorItem