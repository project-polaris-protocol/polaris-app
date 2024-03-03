<script setup lang="ts">
	const { data, error, pending } = await useFetch('/api/meta', {});
</script>
<template>
	<div class="h-screen w-screen flex">
		<div class="w-1/2 h-full">
			<div v-if="pending"></div>
			<div v-else class="flex items-center justify-center h-full">
				<div class="w-5/6">
					<div class="text-left mb-2">{{ data.data.projectCode }}</div>
					<div class="text-left text-3xl">{{ data.data.projectName }}</div>
					<div class="divider w-full"></div>
					<div class="">{{ data.data.aud }}</div>
					<div class="mt-6">
						<NuxtLink class="btn btn-primary btn-outline">クイックスタートガイド</NuxtLink>
					</div>
				</div>
			</div>
		</div>
		<div class="w-1/2 bg-primary flex flex-col items-center justify-center">
			<div class="h-1/3">
				<div class="text-right items-end">
					<img src="/logo_black_text.png" class="h-24" />
				</div>
			</div>
			<div class="h-1/4 p-1">
				<button class="btn btn-lg w-72">
					<div>Controller Node</div>
					<div>として参加</div>
				</button>
			</div>
			<div class="h-1/4 p-1">
				<button class="btn btn-lg w-72">
					<div>Worker Node</div>
					<div>として参加</div>
				</button>
			</div>
		</div>
	</div>
</template>
