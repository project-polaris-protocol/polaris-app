export default defineNuxtRouteMiddleware(async (to, from) => {
	if (to.path === '/quickstart') {
		return;
	}
	if (to.path === '/setup') {
		return;
	}
	const { metadata, layerdata, setMetadata, setLayerdata } = usePLprotoStore();
	const { data, error, pending } = await useFetch('/api/meta', {});
	if (process.server) {
		return;
	}
	if (!metadata) {
		if (data.value == null) {
			return navigateTo('/setup');
		} else {
			console.log(data.value);
			setMetadata(data.value);
		}
	}
	if (to.path === '/') {
		return;
	}
	if (layerdata.length === 0) {
		const { data, error, pending } = await useFetch('/api/layer');
		setLayerdata(data.value);
		console.log(data.value);
	}
});
