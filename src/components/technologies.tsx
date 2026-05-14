import { useMemo } from "react";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Technologies() {
	const { resolvedTheme } = useTheme();
	const isLight = useMemo(() => resolvedTheme !== "dark", [resolvedTheme]);

	return (
		<div className="p-8 2xl:p-14 flex flex-col gap-3 2xl:gap-6 w-full overflow-clip border bg-card border-border  rounded-[30px]">
			<span className="tracking-[3px] text-xl 2xl:text-2xl text-heading font-bold">
				TECHNOLOGIES
			</span>

			<div className="sm:hidden">
				<Marquee speed={20} gradientWidth={100} className="w-full" gradient={true} gradientColor={isLight ? "#fafafa" : "#18181b"}>
					<div className="relative flex h-20 mr-4 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
						<Image fill alt="Next.js" className="p-4 dark:invert object-contain" src="/tech/next-js.svg" />
					</div>
					<div className="relative flex h-20 mr-4 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
						<Image fill alt="React" className="p-4 object-contain" src="/tech/react.svg" />
					</div>
					<div className="relative flex h-20 mr-4 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
						<Image fill alt="Tailwind CSS" className="p-4 object-contain" src="/tech/tailwind.svg" />
					</div>
					<div className="relative flex h-20 mr-4 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
						<Image fill alt="Tauri" className="p-4 object-contain" src="/tech/tauri.svg" />
					</div>
					<div className="relative flex h-20 mr-4 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
						<Image fill alt="Node.js" className="p-4 object-contain" src="/tech/node.svg" />
					</div>
					<div className="relative flex h-20 mr-4 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
						<Image fill alt="Figma" className="p-4 object-contain" src="/tech/figma.svg" />
					</div>
				</Marquee>
			</div>

			<div className="  h-full w-full sm:flex hidden sm:justify-around 2xl:gap-3 sm:flex-wrap">
				<div className="relative flex h-20 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="Next.js" className="p-4 dark:invert object-contain" src="/tech/next-js.svg" />
				</div>
				<div className="relative flex h-20 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="React" className="p-4 object-contain" src="/tech/react.svg" />
				</div>
				<div className="relative flex h-20 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="Tailwind CSS" className="p-4 object-contain" src="/tech/tailwind.svg" />
				</div>
				<div className="relative flex h-20 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="Tauri" className="p-4 object-contain" src="/tech/tauri.svg" />
				</div>
				<div className="relative flex h-20 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="Node.js" className="p-4 object-contain" src="/tech/node.svg" />
				</div>
				<div className="relative flex h-20 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="Figma" className="p-4 object-contain" src="/tech/figma.svg" />
				</div>
			</div>
		</div>
	)
}
