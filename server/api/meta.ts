export default defineEventHandler(async (event) => {
	const items_: any = await import('~/data/meta.json');
	const items_total: any[] = items_.default;
	return {
		data: items_total,
	};
});
