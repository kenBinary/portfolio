import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function that combines clsx and tailwind-merge
 * - clsx handles conditional classes and various input formats
 * - twMerge resolves Tailwind CSS class conflicts intelligently
 * 
 * @param inputs - Class values (strings, objects, arrays, etc.)
 * @returns Merged and deduplicated class string
 * 
 * @example
 * cn("px-2 py-1", "px-4") // "py-1 px-4" (px-2 is overridden)
 * cn("text-red-500", condition && "text-blue-500") // conditional classes
 * cn({ "bg-red-500": isError, "bg-green-500": isSuccess }) // object syntax
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const classNames = cn;