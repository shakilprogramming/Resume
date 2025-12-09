'use client'
import { SiJavascript } from "react"import { SiReact, SiTailwindcss } from "react-icons/si";
 from "react-icons/si";

import Tilt from "react-parallax-tilt"
const Skills =[

    {
        name: "JavaScript",
        icon:<SiJavascript/>
        percentage:89,

    },
    {
        name: "React js",
        icon: <SiReact/>,
        percentage:89,
    },
    {
        name: "React js",
        icon: <SiReact/>,
        percentage:89,
    },
    {
        name: "React js",
        icon: <SiTailwindcss/>,
        percentage:89,
    },
    {
        name: "React js",
        icon: <SiJavascript/>,
        percentage:89,
    },
   
];

const Skills = () =>{
    return <div className="text-white pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-5xl font-bold text-white">
            My <span className="text-cyan-300">Skill</span>
        </h1>

       <div className="flex flex-wrap justify-center gap-6 mt-16">
        {Skills.map(skill) =>{
            return(
             <Tilt key={Skil.name} scale={1.5} transitionSpeed={400}>{
                <div className=" bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                    <div className="text-5xl mb-4 text-gray-300">
                        {skil.icon}

                    </div>
                    <p className="text-2xl font-semibold">{Skil.percentage} %</p>
                    <p className="text-purple-400 mt-1">{skil.name}</p>

                </div>
                </Tilt>   
            )
        } 

        }}
       </div>
    </div>

};

export default Skills;