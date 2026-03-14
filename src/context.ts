import { createContext } from "react";

export const ThemeContext = createContext<boolean>(true);
export const ToggleThemeContext = createContext<((value: boolean) => void) | null>(null);
export const ToastContext = createContext<any | null>(null);