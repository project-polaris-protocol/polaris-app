<script setup lang="ts">
	const redirect = await useRoute().params.redirect;
	const { data, error, pending } = await useFetch('/api/layer');
	const { setLayerdata } = usePLprotoStore();
	console.log(data.value);
	setLayerdata(data.value);
	navigateTo('/');
</script>
<template>
	<div v-if="pending">
		<div class="h-screen w-screen bg-primary flex items-center justify-center">
			<div class="h-56 w-72 bg-white rounded-lg p-2">
				<div class="h-8 font-bold text-2xl text-center">Now Downloading...</div>
				<div class="h-4 text-center text-sm pt-2">レイヤーデータを読み込んでいます</div>
				<div class="h-40 flex items-center justify-center">
					<span class="loading loading-ring text-primary loading-lg"></span>
				</div>
			</div>
		</div>
	</div>
</template>
