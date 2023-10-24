import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const twclsx = (...args) => twMerge(clsx(...args))
