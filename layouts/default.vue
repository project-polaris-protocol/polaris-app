<script setup lang="ts">
	// ステータスランプ状態変化について
	// 端末
	// [LINK,ALONE]
	// AOC
	// [AUTO,MANUAL]
	// 状態
	// [AOC,STANDBY,PREPARE,PAL]
	const device = ref('ALONE');
	const aoc = ref('MANUAL');
	const status = ref('PREPARE');
	import crosslink from '~/components/crosslink.vue';
	import chat from '~/components/chat.vue';
	import control from '~/components/control.vue';
</script>
<template>
	<div class="h-screen flex flex-col">
		<div class="h-28 p-4">
			<div class="flex sidebar">
				<div class="min-w-96 w-1/3 p-2">
					<div class="text-lg p-1">No.9</div>
					<div class="text-xl">テスト</div>
				</div>
				<div class="w-28 flex flex-wrap items-center justify-center p-2">
					<div class="w-full flex items-center justify-center text-xs p-2">端末</div>
					<div class="w-full flex items-center justify-center p-1 text-base font-semibold" :class="{ 'bg-sky-100 text-sky-600': device == 'LINK', 'bg-gray-100': device == 'ALONE' }">
						{{ device }}
					</div>
				</div>
				<div class="w-28 flex flex-wrap items-center justify-center p-2">
					<div class="w-full flex items-center justify-center text-xs p-2">同期</div>
					<div class="w-full flex items-center justify-center p-1 text-base font-semibold" :class="{ 'bg-sky-100 text-sky-600': aoc == 'AUTO', 'bg-gray-100': aoc == 'MANUAL' }">
						{{ aoc }}
					</div>
				</div>
				<div class="w-28 flex flex-wrap items-center justify-center p-2">
					<div class="w-full flex items-center justify-center text-xs p-2">端末</div>
					<div class="w-full flex items-center justify-center p-1 text-base font-semibold" :class="{ 'bg-sky-100 text-sky-600': status == 'AOC', 'bg-gray-100': status == 'PREPARE' }">
						{{ status }}
					</div>
				</div>
				<div>
					<NuxtImg src="/logo.png" width="200"></NuxtImg>
				</div>
			</div>
		</div>
		<div class="flex-grow w-full flex sidebar">
			<div class="w-auto px-3">
				<slot />
			</div>
			<div class="w-80">
				<div class="flex flex-row">
					<div>
						<chat />
					</div>
					<div></div>
				</div>
			</div>
			<!--
			<div class="w-60">
				<crosslink />
			</div>
        --></div>
	</div>
</template>
<style>
	.sidebar > div:first-of-type {
		margin-right: auto;
	}
</style>
