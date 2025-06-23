import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

const envVersion = process.env.NEXT_PUBLIC_STORYBLOK_VERSION;
const version: 'draft' | 'published' = envVersion === 'published' ? 'published' : 'draft';
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
