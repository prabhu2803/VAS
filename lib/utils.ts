import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const siteConfig = {
  name: "Vijay Autostores",
  description: "Your trusted partner for commercial vehicle parts in Madurai",
  url: "https://vijayautostores.com",
  ogImage: "/og.jpg",
}

