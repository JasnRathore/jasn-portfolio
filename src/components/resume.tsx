import { DownloadIcon } from "@radix-ui/react-icons";

export default function Resume() {
	return (
		<div className="p-8 transition-shadow duration-500 ease-in-out hover:shadow-lg 2xl:p-14 sm:px-4 sm:py-7 md:p-8 min-w-fit h-full lg:h-32 w-full lg:w-full xl:h-full xl:w-1/3  flex lg:flex-row xl:flex-col items-center justify-between border bg-card border-border rounded-[30px] text-text">
			<span className="tracking-[3px] text-2xl text-heading font-bold">
				RESUME
			</span>
			<a href="JASN_RATHORE_RESUME_2026.pdf" download={true}>
				<DownloadIcon className="size-10 2xl:size-14" />
			</a>
		</div>
	)
} 
