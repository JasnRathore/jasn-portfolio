import { EnvelopeClosedIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useContext } from "react";
import { openLink, copyToClipboard } from "../lib";
import { ToastContext } from "../context";

export default function Links() {
  const setOpen = useContext(ToastContext);
  const timerRef = useRef(0);

  const mail = () => {					
    const email = "jasn.p.rathore@gmail.com";
    copyToClipboard(email);
    if (setOpen) {
      setOpen(false);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setOpen(true);
      }, 100);
    }
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="flex flex-row justify-between sm:justify-start lg:flex-row xl:flex-col gap-2 lg:gap-4">
      {/* Mobile buttons (no transitions) */}
      <button onClick={() => openLink("https://www.linkedin.com/in/jasn-rathore-884644256/")} className="flex sm:hidden items-center justify-center size-24 lg:size-32 xl:size-20 border bg-card border-border rounded-[20px]">
        <LinkedInLogoIcon className="size-3/5"/>
      </button>
      <button onClick={() => openLink("https://github.com/JasnRathore")} className="flex sm:hidden items-center justify-center size-24 lg:size-32 xl:size-20 border bg-card border-border rounded-[20px]">
        <GitHubLogoIcon className="size-3/5" />
      </button>
      <button onClick={() => mail()} className="flex sm:hidden items-center justify-center size-24 lg:size-32 xl:size-20 border bg-card border-border rounded-[20px]">
        <EnvelopeClosedIcon className="size-3/5" />
      </button>
      <button onClick={() => openLink("https://www.instagram.com/killermarine_studios/")} className="flex sm:hidden items-center justify-center size-24 lg:size-32 xl:size-20 border bg-card border-border rounded-[20px]">
        <InstagramLogoIcon className="size-3/5" />
      </button>

      {/* Desktop buttons with transitions (fixed for dark mode) */}
      <div className="hidden sm:flex flex-row gap-2 lg:gap-4">
        <button 
          onClick={() => openLink("https://www.linkedin.com/in/jasn-rathore-884644256/")} 
          className="flex items-center justify-center size-24 lg:size-32 xl:size-20 2xl:size-28 border bg-card border-border rounded-[20px] 
                     transition-colors duration-500 ease-out hover:bg-sky-500 
                     dark:transition-none"
        >
          <LinkedInLogoIcon className="size-3/5"/>
        </button>
        <button 
          onClick={() => openLink("https://github.com/JasnRathore")} 
          className="flex items-center justify-center size-24 lg:size-32 xl:size-20 2xl:size-28 border bg-card border-border rounded-[20px] 
                     transition-colors duration-500 ease-out hover:bg-purple-700 
                     dark:transition-none"
        >
          <GitHubLogoIcon className="size-3/5" />
        </button>
      </div>
      
      <div className="hidden sm:flex flex-row gap-2 lg:gap-4">
        <button 
          onClick={() => mail()} 
          className="flex items-center justify-center size-24 lg:size-32 xl:size-20 2xl:size-28 border bg-card border-border rounded-[20px] 
                     transition-colors duration-500 ease-out hover:bg-red-500 
                     dark:transition-none"
        >
          <EnvelopeClosedIcon className="size-3/5" />
        </button>
        <button 
          onClick={() => openLink("https://www.instagram.com/killermarine_studios/")} 
          className="flex items-center justify-center size-24 lg:size-32 xl:size-20 2xl:size-28 border bg-card border-border rounded-[20px] 
                     transition-colors duration-500 ease-out hover:bg-pink-500 
                     dark:transition-none"
        >
          <InstagramLogoIcon className="size-3/5" />
        </button>
      </div>
    </div>
  )
}