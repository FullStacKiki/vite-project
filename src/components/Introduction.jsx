import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Icon } from 'lucide-react'
import { IconCloudDemo } from './Tech'
import ScriptCopyBtn from './ui/script-copy-btn'
import Work, { ScriptCopyBtnDemo } from './Work'
import {Button} from './ui/button'
import BlurFade from "@/components/ui/blur-fade";
import WordPullUp from "@/components/ui/word-pull-up";
import { Github, Linkedin } from 'lucide-react';
import pfp from '@/assets/pfp.jpg';


const Introduction = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex items-center gap-12 text-black">

        {/* Colonna sinistra: avatar+nome in riga, poi testo sotto */}
        <div className="max-w-xl">
          <BlurFade delay={0}>
            <div className="flex items-center gap-4">
              <img
                src={pfp}
                alt="Alex"
                className="w-20 h-20 rounded-full object-cover"
              />
              <h1 className="text-4xl font-bold">Hi 👋, I'm Alex</h1>
            </div>
          </BlurFade>

          <BlurFade delay={0.5}>
            <p className="mt-5 text-pretty text-xl">
              17 y/o Indie developer from Italy, building cross-platform apps with React and Supabase.<br/>
              Data Science student at Ca' Foscari University of Venice.
            </p>
          </BlurFade>
          <BlurFade delay={0.75}>
  <div className="flex gap-3 mt-4">
    <a
      href="https://github.com/FullStacKiki"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="inline-flex text-white bg-black p-1 rounded-sm transition-opacity"
    >
      <Github className="w-7 h-7" />
    </a>
    <a
      href="https://www.linkedin.com/in/alessandro-ravanelli-2a585838b/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="inline-flex text-white bg-blue-800 p-1 rounded-sm transition-opacity"
    >
      <Linkedin className="w-7 h-7" />
    </a>
  </div>
</BlurFade>
        </div>

        {/* Colonna destra: icon cloud */}
        <BlurFade delay={1}>
          <IconCloudDemo />
        </BlurFade>

      </div>
    </div>
  )
}

export default Introduction

