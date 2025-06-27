import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Article from "@/components/Article";

const accessToken = process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;

export const getStoryblokApi = storyblokInit({
  accessToken,
  use: [apiPlugin],
  components: {
    article: Article,
  },
});