<template>
	<div>
		<div class="flex items-center justify-center">
			<div class="w-1/3 flex flex-wrap items-center justify-center p-2">
				<div class="w-full flex items-center justify-center text-xs p-2">端末</div>
				<div class="w-full flex items-center justify-center p-1 text-base font-semibold" :class="{ 'bg-sky-100 text-sky-600': device == 'LINK', 'bg-gray-100': device == 'ALONE' }">
					{{ device }}
				</div>
			</div>
			<div class="w-1/3 flex flex-wrap items-center justify-center p-2">
				<div class="w-full flex items-center justify-center text-xs p-2">同期</div>
				<div class="w-full flex items-center justify-center p-1 text-base font-semibold" :class="{ 'bg-sky-100 text-sky-600': aoc == 'AUTO', 'bg-gray-100': aoc == 'MANUAL' }">
					{{ aoc }}
				</div>
			</div>
			<div class="w-1/3 flex flex-wrap items-center justify-center p-2">
				<div class="w-full flex items-center justify-center text-xs p-2">端末</div>
				<div class="w-full flex items-center justify-center p-1 text-base font-semibold" :class="{ 'bg-sky-100 text-sky-600': status == 'AOC', 'bg-gray-100': status == 'PREPARE' }">
					{{ status }}
				</div>
			</div>
		</div>
	</div>
</template>
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
</script>
