import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

const version = (process.env.NEXT_PUBLIC_STORYBLOK_VERSION ?? 'draft') as 'draft' | 'published';

export default async function Home() {
	const { data } = await fetchData();
	return (
		<div className="page">
			<StoryblokStory story={data.story} />
		</div>
	);
}
 async function fetchData() {
	const storyblokApi = getStoryblokApi();
	return await storyblokApi.get(`cdn/stories/aeronauts`, { version: version });
}
