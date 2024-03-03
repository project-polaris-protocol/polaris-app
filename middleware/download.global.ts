export default defineNuxtRouteMiddleware(async (to, from) => {
	if (to.path === '/quickstart') {
		return;
	}
	if (to.path === '/setup') {
		return;
	}
	if (to.path === '/') {
		return;
	}
	const { layerdata } = usePLprotoStore();
	if (!layerdata) {
		return navigateTo(`/loading?redirect=${redirect}`);
	}
});
