import { createContext, Dispatch, SetStateAction } from "react";

export const ThemeContext = createContext<boolean>(true);
export const ToggleThemeContext = createContext<((value: boolean) => void) | null>(null);
export const ToastContext = createContext<Dispatch<SetStateAction<boolean>> | null>(null);