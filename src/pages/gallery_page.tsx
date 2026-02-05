import { useContext } from "react";
import { ThemeContext } from "../context";
import { NavLink } from "react-router";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { ProjectItem } from "../components/gallery_item";
//import { DesignItem } from "../components/design_item";
import { CPPLogo, GOLogo, JAVALogo, JSLogo, MYSQLLogo, NEXTJSLogo, PowerShellLogo, PYLogo, ReactLogo, RSLogo, SqliteLogo, SupabaseLogo, TailwindLogo, TSLogo, WakuLogo } from "../components/logos";

export function GalleryPage() {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${theme ? "" : "dark"} p-4 md:p-8 2xl:p-14 flex flex-col min-h-screen bg-background text-text`}>
      <div className="container mx-auto">
        {/* Header Section */}
        <header className="mb-8 2xl:mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <NavLink
              to="/"
              className="flex items-center gap-2 group transition-colors hover:text-accent"
            >
              <div className="border-2 border-border p-1 rounded-full group-hover:border-accent transition-colors">
                <ArrowLeftIcon className="size-5 2xl:size-7" />
              </div>
              <span className="text-md lg:text-xl 2xl:text-2xl font-medium">
                Back to Home
              </span>
            </NavLink>
            <span className="tracking-[3px] text-2xl lg:text-3xl 2xl:text-4xl text-heading font-bold">
              PROJECTS GALLERY
            </span>
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8">
          {/* Featured Project */}
          <div className="lg:col-span-2">
            <ProjectItem
              title="Su-Fumi"
              link="https://sufumi.vercel.app/"
              description="A venture focused on building CLI tools that accelerate developer workflows with modern web technologies."
              featured
            >
              <TSLogo />
              <TailwindLogo />
              <WakuLogo />
            </ProjectItem>
          </div>

          {/* Regular Projects */}

          <ProjectItem
            title="Java Hot Reloader"
            link="https://github.com/JasnRathore/jpr"
            description="A venture focused on building CLI tools that accelerate developer workflows with modern web technologies."
            featured
          >
            <JAVALogo />
          </ProjectItem>

          <ProjectItem
            title="Jasn Package Manager"
            link="https://github.com/JasnRathore/jpm"
            description="A simple and fast package manager for my Personal projects built with GO"
            featured
          >
            <GOLogo />
          </ProjectItem>
          <ProjectItem
            title="GFG Club Site"
            link="https://gfgbvdoet.vercel.app/"
            description="Our club's website for events, team information, and memories with responsive design."
          >
            <TSLogo />
            <NEXTJSLogo />
            <SupabaseLogo />
            <TailwindLogo />
          </ProjectItem>

          <ProjectItem
            title="Project Aliaser (PA)"
            link="https://github.com/JasnRathore/project-aliaser"
            description="CLI tool for aliasing folder/project locations to quickly navigate between them."
          >
            <PowerShellLogo />
            <GOLogo />
            <SqliteLogo />
          </ProjectItem>

          <ProjectItem
            title="JCommandChain (JCC)"
            link="https://github.com/JasnRathore/JCommandChain"
            description="Run multiple commands/scripts concurrently or create command aliases."
          >
            <GOLogo />
          </ProjectItem>

          <ProjectItem
            title="JYNTAXE"
            link="https://github.com/JasnRathore/jyntaxe"
            description="Minimalist code editor built with Monaco Editor, React, and Tauri."
          >
            <ReactLogo /><TailwindLogo /><RSLogo />
          </ProjectItem>

          <ProjectItem
            title="BUISQL"
            link="https://github.com/JasnRathore/BUISQL"
            description="Simple GUI for viewing MySQL data without using the command line interface."
          >
            <JSLogo /><TailwindLogo /><PYLogo /><MYSQLLogo />
          </ProjectItem>

          <ProjectItem
            title="HADES CPP"
            link="https://github.com/JasnRathore/hadescpp"
            description="GUI CRUD application for prison data management (school project extended)."
          >
            <CPPLogo />
          </ProjectItem>

          <ProjectItem
            title="HADES"
            description="CLI CRUD app for prison data management (original school project)."
            link="https://github.com/JasnRathore/Hades"
          >
            <PYLogo />
            <MYSQLLogo />
          </ProjectItem>
        </div>
      </div>
    </div>
  )
}