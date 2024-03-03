import type { Metadata } from '~/server/types/meta.ts';
export default defineEventHandler(async (event: any) => {
	const meta_: any = await import('~/data/meta.json');
	const meta: Metadata = meta_.default;
	return meta;
});
