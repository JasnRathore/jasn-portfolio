import { useMemo } from "react";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Languages() {
	const { resolvedTheme } = useTheme();
	const isLight = useMemo(() => resolvedTheme !== "dark", [resolvedTheme]);
	return (
		<div className="py-8 px-6 border lg:w-1/2 xl:w-2/3 overflow-clip flex flex-row border bg-card border-border  rounded-[30px]">
			<Marquee speed={20} gradientWidth={100} className="w-full lg:w-2/3" gradient={true} gradientColor={isLight ? "#fafafa" : "#18181b"}>
				<div className="relative flex h-20 2xl:h-28 2xl:mr-6 mr-4 lg:mr-2 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="JavaScript" className="p-4 rounded-[8px] object-contain" src="/lang/js.svg" />
				</div>
				<div className="relative flex h-20 2xl:h-28 2xl:mr-6 mr-4 lg:mr-2 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="TypeScript" className="p-4 rounded-[8px] object-contain" src="/lang/ts.svg" />
				</div>
				<div className="relative flex h-20 2xl:h-28 2xl:mr-6 mr-4 lg:mr-2 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="Python" className="p-4 object-contain" src="/lang/py.svg" />
				</div>
				<div className="relative flex h-20 2xl:h-28 2xl:mr-6 mr-4 lg:mr-2 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="Rust" className="p-4 dark:invert object-contain" src="/lang/rs.svg" />
				</div>
				<div className="relative flex h-20 2xl:h-28 2xl:mr-6 mr-4 lg:mr-2 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="MySQL" className="p-4 object-contain" src="/lang/mysql.svg" />
				</div>
				<div className="relative flex h-20 2xl:h-28 2xl:mr-6 mr-4 lg:mr-2 aspect-square bg-foreground rounded-[20px] items-center justify-center overflow-hidden">
					<Image fill alt="Go" className="p-4 object-contain" src="/lang/go.svg" />
				</div>
			</Marquee>
		</div>
	)
}
