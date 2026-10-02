import { useState } from 'react'
import Introduction from './components/Introduction'
import DotPattern from './components/ui/dot-pattern'
"use client";
import { cn } from "@/lib/utils";
import Marquee from "./components/ui/marquee";
import { MarqueeDemo } from './components/Project';
import BlurFade from './components/ui/blur-fade';
import Skills from './components/Skills';

function App() {

  return (
    <>

      <br/>
      <br/>
      <DotPattern height={20} width={20} className=" overflow-hidden w-full h-full opacity-100 -z-50" />
        <Introduction className="z-99 overflow-hidden "/>
    </>
  )
}

export default App
