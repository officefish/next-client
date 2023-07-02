import { FC, useState,  useEffect } from "react"

import { 
    robotoSerif, 
    oldEnglish, 
    philosopher, 
    volcorn,
    playfairDisplay,
    overpass,
    interTight,
    rubik80sFade,
    rubikGlitch,
    jetBrainsMono,
    ptMono 
} from '@assets/fonts'

type Props = {}
const Typography: FC = (props: Props) => {

  return (
    <div className="mt-24 oft-col">

        <div className="oft-col"> 

            <h3 className="mt-10 ">Typography. All awailable Fonts.</h3>

            <ul className="oft-col bg-slate-50">
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">oldEnglish.className</span> `:</label>
                    <p className={`${oldEnglish.className} text-2xl`}>Old Engilsh</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">robotoSerif.className</span> `:</label>
                    <p className={`${robotoSerif.className} text-2xl`}>Roboto Serif</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">philosopher.className</span> `:</label>
                    <p className={`${philosopher.className} text-2xl`}>Philosopher</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">volcorn.className</span> `:</label>
                    <p className={`${volcorn.className} text-2xl`}>Volcorn</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">playfairDisplay.className</span> `:</label>
                    <p className={`${playfairDisplay.className} text-2xl`}>Playfair Display</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">overpass.className</span> `:</label>
                    <p className={`${overpass.className} text-2xl`}>Overpass</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">interTight.className</span> `:</label>
                    <p className={`${interTight.className} text-2xl`}>Inter Tight</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">rubik80sFade.className</span> `:</label>
                    <p className={`${rubik80sFade.className} text-2xl`}>Rubik 80's Fade</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">rubikGlitch.className</span> `:</label>
                    <p className={`${rubikGlitch.className} text-2xl`}>Rubik Glitch</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">jetBrainsMono.className</span> `:</label>
                    <p className={`${jetBrainsMono.className} text-2xl`}>Jet Brains Mono</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">ptMono.className</span> `:</label>
                    <p className={`${ptMono.className} text-2xl`}>Pt Mono</p>        
                </li>
            </ul>
            
        </div>

        <div className="oft-col"> 

            <h3 className="mt-10 ">Typography. Tailwind Fonts.</h3>

            <ul className="oft-col bg-slate-50">
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">oldEnglish.className</span> `:</label>
                    <p className="font-old-english text-2xl">Old Engilsh</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">font-roboto-serif</span> `:</label>
                    <p className="font-roboto-serif text-2xl">Roboto Serif</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">font-philosopher</span> `:</label>
                    <p className="font-philosopher text-2xl">Philosopher</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">font-volcorn</span> `:</label>
                    <p className="font-volcorn text-2xl">Volcorn</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">font-playfair</span> `:</label>
                    <p className="font-playfair text-2xl">Playfair Display</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">font-overpass</span> `:</label>
                    <p className="font-overpass text-2xl">Overpass</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">font-inter-tight</span> `:</label>
                    <p className="font-inter-tight text-2xl">Inter Tight</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">font-rubik-fade</span> `:</label>
                    <p className="font-rubik-fade text-2xl">Rubik 80's Fade</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">font-rubik-glitch</span> `:</label>
                    <p className="font-rubik-glitch text-2xl">Rubik Glitch</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">font-jetbrains</span> `:</label>
                    <p className="font-jetbrains text-2xl">Jet Brains Mono</p>        
                </li>
                <li className="mt-4 oft-row-between-1/2">
                    <label className="mr-10">Class ` <span className="text-pink-500 text-lg">font-pt-mono</span> `:</label>
                    <p className="font-pt-mono text-2xl">Pt Mono</p>        
                </li>
              
            </ul>

        </div>

    </div>
    
  )
}

export default Typography