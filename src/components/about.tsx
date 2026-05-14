import { ArrowTopRightIcon, Cross1Icon } from "@radix-ui/react-icons";

import Profile from "./profile";
import Projects from "./projects";
import Gallery from "./gallery";

interface AboutInterface {
	toggleSlide: (open: boolean) => void
}

export function About({ toggleSlide }: AboutInterface) {
	return (
		<div className="p-8 flex md:hidden flex-row items-center justify-between gap-3 w-full border bg-card border-border  rounded-[30px]">
			<span className="tracking-[3px] text-xl text-heading font-bold">
				ABOUT
			</span>
			<button className="border-2 border-border p-1 rounded-full" onClick={() => toggleSlide(true)}>
				<ArrowTopRightIcon className="size-6" />
			</button>
		</div>
	)
}

export function AboutSlide({ toggleSlide }: AboutInterface) {
	return (
		<div className="bg-transparent w-full">
		<div className="mx-4 p-4 h-max flex md:hidden flex-col items-center justify-start gap-4 border-2 bg-background border-border rounded-t-[30px]">
			<button className="border-2 border-border p-3 rounded-full" onClick={() => toggleSlide(false)}>
				<Cross1Icon className="size-7" />
			</button>
			<Profile />
			<div className="flex flex-col sm:flex-row gap-4 w-full">
				<Projects />
				<Gallery />
			</div>
		</div>
		</div>
	)
}
