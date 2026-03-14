import { About, AboutSlide } from "./components/about"
import Gallery from "./components/gallery"
import Intro from "./components/intro"
import Languages from "./components/languages"
import Links from "./components/links"
import Pfp from "./components/pfp"
import Profile from "./components/profile"
import Projects from "./components/projects"
import Resume from "./components/resume"
import Technologies from "./components/technologies"
import ThemeControl from "./components/theme_control"

import { useTheme } from "next-themes"
import { useState, useMemo } from "react"

export function Max() {
  const { resolvedTheme } = useTheme();
  const isLight = useMemo(() => resolvedTheme !== "dark", [resolvedTheme]);

  return (
    <div className={`${isLight ? "" : "dark"} p-8 2xl:p-14 flex hidden xl:flex flex-col gap-4 2xl:gap-6 font-montserrat noise w-screen h-screen bg-background text-text`}>
      <div className="flex flex-row gap-4 2xl:gap-8 w-full ">
        <Intro />
        <Links />
        <Projects />
        <Gallery />
      </div>
      <div className="h-max w-full flex flex-row gap-4 2xl:gap-8">
        <div className="flex flex-col gap-4 2xl:gap-8">
          <Pfp />
          <ThemeControl />
        </div>

        <div className="flex w-3/5 flex-col gap-4 2xl:gap-8">
          <Profile />
          <div className="flex h-full w-full flex-row gap-4 2xl:gap-8">
            <Languages />
            <Resume />
          </div>
        </div>
        <Technologies />
      </div>
    </div>
  )
}

export function Mid() {
  const { resolvedTheme } = useTheme();
  const isLight = useMemo(() => resolvedTheme !== "dark", [resolvedTheme]);
  
	return (
    <div className={`${isLight ? "" : "dark"} p-4 hidden lg:flex xl:hidden flex-col gap-4 font-montserrat noise w-screen h-full bg-background text-text`}>
      <div className="flex flex-row gap-4 w-full">
        <Intro />
        <Pfp />
      </div>
      <Profile />
      <div className="flex h-max w-full flex-row gap-4 ">
        <Links />
        <Resume />
        <div className="flex flex-col ">
          <ThemeControl />
        </div>
      </div>
      <div className="flex h-max w-full flex-row gap-4 ">
        <Gallery />
        <Projects />
      	<Languages />
      </div>
        <Technologies />
    </div>
	)
}

export function Mobile2X() {
  const { resolvedTheme } = useTheme();
  const isLight = useMemo(() => resolvedTheme !== "dark", [resolvedTheme]);
   const [open, setOpen] = useState(false);
   return (
     <div className={`${isLight ? "" : "dark"} ${ open ? "" : "p-4"} flex lg:hidden flex-col gap-4 font-montserrat h-full w-full bg-background text-text`}>
      {open ?  
        (<AboutSlide toggleSlide={setOpen}/>)
      : (
      <>
        <Intro />
        <About toggleSlide={setOpen}/>
      <div className="hidden md:flex">
        <Profile />
      </div>
      <div className="hidden md:flex h-max w-full flex-row gap-2 ">
        <Gallery />
        <Projects />
        <div className="flex flex-col ">
          <ThemeControl  />
        </div>
      </div>
      <div className="flex h-max w-full flex-col sm:flex-row gap-2 ">
        <Links />
        <Resume />
      </div>
        <Languages/>
        <Technologies />
      </>
    )}
    </div>
  )
}
