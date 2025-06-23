import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Article from "@/components/Article";

const isPreview = process.env.APP_ENV === 'preview';
const accessToken = process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;

if (!accessToken) {
  throw new Error("Missing NEXT_PUBLIC_STORYBLOK_TOKEN environment variable.");
}

export const getStoryblokApi = storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: {
    article: Article,
  apiOptions: {
    cache: !isPreview, // disable cache for preview
  }
  },
});