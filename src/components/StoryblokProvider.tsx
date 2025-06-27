"use client";

import { getStoryblokApi } from "@/lib/storyblok";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function StoryblokProvider({ children }: Props) {
  getStoryblokApi();
  return children;
}