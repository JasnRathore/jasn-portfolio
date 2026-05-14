import { useMemo } from "react";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { DesignItem } from "../components/design_item";

export default function DesignsPage() {
  const { resolvedTheme } = useTheme();
  const isLight = useMemo(() => resolvedTheme !== "dark", [resolvedTheme]);
  const logos = [
    "/design-images/logos/1.png",
    "/design-images/logos/2.png",
    "/design-images/logos/3.png",
    "/design-images/logos/4.png",
    "/design-images/logos/5.png",
    "/design-images/logos/6.png",
    "/design-images/logos/7.png",
    "/design-images/logos/8.png",
    "/design-images/logos/9.png",
    "/design-images/logos/10.png",
    "/design-images/logos/11.png",
  ]
  return (
    <div className={`${isLight ? "" : "dark"} p-4 md:p-8 2xl:p-14 flex flex-col min-h-screen bg-background text-text`}>
      <div className="container mx-auto">
        {/* Header Section */}
        <header className="mb-8 2xl:mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 group transition-colors hover:text-accent"
            >
              <div className="border-2 border-border p-1 rounded-full group-hover:border-accent transition-colors">
                <ArrowLeftIcon className="size-5 2xl:size-7" />
              </div>
              <span className="text-md lg:text-xl 2xl:text-2xl font-medium">
                Back to Home
              </span>
            </Link>
            <span className="tracking-[3px] text-2xl lg:text-3xl 2xl:text-4xl text-heading font-bold">
              DESIGN GALLERY
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8">


          <div className="lg:col-span-2 flex flex-col gap-2">
            <span className="text-lg lg:text-xl 2xl:text-2xl text-heading font-bold">
              My Logos
            </span>
            <div className="w-full p-2">
              <Marquee speed={20} gradientWidth={100} className="w-full" gradient={true} gradientColor={isLight ? "#e4e4e7" : "#09090b"}>
                {
                  logos.map((value, index) => (
                    <div key={index} className="relative 2xl:mr-6 mr-4 aspect-square bg-card rounded-[15px] lg:rounded-[30px] size-16 lg:size-28 overflow-hidden">
                      <Image
                        src={value}
                        alt={`Logo ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  ))
                }
              </Marquee>
            </div>
          </div>

          <DesignItem
            title="Desktop App Store design"
            description="Was Designed for a Project of mine"
            images={[
              { url: "/design-images/app-store/1.png", ratio: "landscape" },
              { url: "/design-images/app-store/2.png", ratio: "landscape" },
              { url: "/design-images/app-store/3.png", ratio: "landscape" },
              { url: "/design-images/app-store/4.png", ratio: "landscape" },
              { url: "/design-images/app-store/5.png", ratio: "landscape" },
            ]}
            tags={["Figma", "Desktop", "Web-App", "Web"]}
          />
          <DesignItem
            title="Gfg Club Site"
            description="An Initial Draft for our Clg Club"
            images={[
              { url: "/design-images/gfg-club/1.png", ratio: "landscape" },
              { url: "/design-images/gfg-club/2.png", ratio: "landscape" },
            ]}
            tags={["Figma", "Desktop", "Web-App", "Web"]}
          />
          <DesignItem
            title="My Portfolio"
            description="Incorporates Responsive Design and Themes"
            images={[
              { url: "/design-images/portfolio/1.png", ratio: "landscape" },
              { url: "/design-images/portfolio/2.png", ratio: "portrait" },
              { url: "/design-images/portfolio/3.png", ratio: "portrait" },
              { url: "/design-images/portfolio/4.png", ratio: "portrait" },
              { url: "/design-images/portfolio/5.png", ratio: "portrait" },
              { url: "/design-images/portfolio/6.png", ratio: "landscape" },
              { url: "/design-images/portfolio/7.png", ratio: "portrait" },
              { url: "/design-images/portfolio/8.png", ratio: "portrait" },
              { url: "/design-images/portfolio/9.png", ratio: "portrait" },
              { url: "/design-images/portfolio/10.png", ratio: "portrait" },
            ]}
            tags={["Figma", "Desktop", "Mobile", "Web", "Dark"]}
          />
          <DesignItem
            title="Dicord for Companies"
            description="A webapp design that helps you manage your small teams "
            images={[
              { url: "/design-images/discord-clone/1.png", ratio: "landscape" },
              { url: "/design-images/discord-clone/2.png", ratio: "landscape" },
              { url: "/design-images/discord-clone/3.png", ratio: "landscape" },
            ]}
            tags={["Figma", "Desktop", "Web-App", "Web"]}
          />
          <DesignItem
            title="Todo App"
            description="Practicing Designing for Mobile"
            images={[
              { url: "/design-images/todo/1.png", ratio: "portrait" },
              { url: "/design-images/todo/2.png", ratio: "portrait" },
              { url: "/design-images/todo/3.png", ratio: "portrait" },
              { url: "/design-images/todo/4.png", ratio: "portrait" },
              { url: "/design-images/todo/5.png", ratio: "portrait" },
            ]}
            tags={["Figma", "Mobile"]}
          />
          <DesignItem
            title="Minimalist Templates"
            description="E-Commerce site For selling paper templates"
            images={[
              { url: "/design-images/mt/home.png", ratio: "landscape" },
              { url: "/design-images/mt/shop.png", ratio: "landscape" },
              { url: "/design-images/mt/product.png", ratio: "landscape" },
              { url: "/design-images/mt/cart.png", ratio: "landscape" },
            ]}
            tags={["Figma", "Web", "E-Commerce"]}
          />
          <DesignItem
            title="Infinix"
            description="Home Page designed for Figma competition"
            images={[{ url: "/design-images/infinix/Inifinix.png", ratio: "landscape" }]}
            tags={["Figma", "Web"]}
          />

        </div>
      </div>
    </div>
  )
}