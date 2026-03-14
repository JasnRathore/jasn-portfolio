import Link from "next/link"

export default function Gallery() {
	return (

		<div className="p-8 transition-shadow duration-500 ease-in-out hover:shadow-lg 2xl:p-14 flex flex-col items-center gap-4 2xl:gap-6 2xl:min-w-fit sm:gap-0 sm:justify-between xl:w-fit border bg-card border-border rounded-[30px] text-text">
			<span className="tracking-[3px] text-xl 2xl:text-2xl text-heading font-bold">
				GALLERY
			</span>
			<Link href="/projects" className="2xl:text-2xl sm:my-2 flex flex-row items-center justify-center py-1 px-1.5 w-full 2xl:w-fit bg-foreground rounded-[10px]">
				Projects
			</Link>
			<Link href="/designs" className="2xl:text-2xl flex flex-row items-center justify-center py-1 px-1.5 w-full 2xl:w-fit bg-foreground rounded-[10px]">
				Designs
			</Link>

		</div>
	)
}
