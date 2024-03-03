<script setup lang="ts">
	const route = useRoute();
	const redirect = route.params.redirect;
	const { data, error, pending } = useFetch('/api/layer');
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
	<div v-else>
		<div class="h-screen w-screen bg-primary flex items-center justify-center">
			<div class="h-56 w-72 bg-white rounded-lg p-2 flex items-center justify-center">
				<div>
					<div class="font-semibold text-center">ダウンロードに成功しました！</div>
					<div class="flex items-center justify-center mt-6">
						<NuxtLink :to="redirect" class="btn btn-primary btn-outline" :class="{ 'btn-disabled': pending, 'btn-disabled': !redirect }">ページに進む</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
