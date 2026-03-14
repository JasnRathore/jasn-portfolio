import { useMemo } from "react";
import { useTheme } from "next-themes";

export function ErrorPage() {
	const { resolvedTheme } = useTheme();
	const isLight = useMemo(() => resolvedTheme !== "dark", [resolvedTheme]);
	return (
		<div className={`${isLight ? "" : "dark"} p-8 font-montserrat w-screen h-screen bg-background text-text`}>
			404 Error
		</div>
	)
}
