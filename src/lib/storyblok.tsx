import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Article from "@/components/Article";

const accessToken = process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;

if (!accessToken) {
  throw new Error("Missing NEXT_PUBLIC_STORYBLOK_TOKEN environment variable.");
}

export const getStoryblokApi = storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: {
    article: Article,
  },
});