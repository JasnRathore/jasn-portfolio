import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { useMemo } from "react";

export default function ThemeControl() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const isLight = useMemo(() => theme === "light", [theme]);
  const isResolvedLight = useMemo(() => resolvedTheme === "light", [resolvedTheme]);

  return (
    <div className="p-8 2xl:p-14 flex items-center justify-center md:h-full lg:h-32 xl:h-1/2 bg-card border border-border rounded-[30px] ">
      <Switch.Root
        checked={isLight}
        onCheckedChange={() => setTheme(isLight ? "dark" : "light")}
        className="outline-none border-border relative h-[50px] w-[84px] p-1 cursor-default rounded-full bg-foreground "
      >
        <Switch.Thumb
          className="block size-[42px] p-2.5 bg-toggle flex items-center justify-center rounded-full transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[80%]"
        >
          {isResolvedLight ? <SunIcon className="size-full" /> : <MoonIcon className="size-full" />}
        </Switch.Thumb>
      </Switch.Root>
    </div>
  );
}
