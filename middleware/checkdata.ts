export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path !== '/setup') {
		const { metadata, layerdata, setMetadata } = usePLprotoStore();
		const { data, error, pending } = await useFetch('/api/meta', {});
		if (metadata.value === null) {
			if (data.value === null) {
				return navigateTo('/setup');
			} else {
				setMetadata(data.value);
			}
		}
	}
});
