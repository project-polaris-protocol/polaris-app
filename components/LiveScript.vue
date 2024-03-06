<script setup lang="ts">
	const testcell = [
		{ object: 'ABSOLUTE', color: '#000000', pointer: '32', content: '照明点滅' },
		{ object: 'RELATIVE', color: '#000000', pointer: '10', content: '照明消灯' },
		{ object: 'ACTION', color: '#000000', pointer: 'hugahugahogehogeのタイミングで', content: '照明点灯' },
	];
</script>
<template>
	<div>
		<div class="p-2">
			<div class="h-42 border-2 border-primary rounded-xl p-3">
				<div class="text-center font-bold text-4xl">123</div>
			</div>
		</div>
		<div class="p-4">
			<div v-for="cell in testcell" :style="`border-color: ${cell.color}`" class="border-4 rounded-xl p-2 m-3">
				<div class="text-center">
					<div
						class="mx-2 rounded-xl badge-sm"
						:class="{ 'badge-primary': cell.object == 'ABSOLUTE', 'badge-secondary': cell.object == 'RELATIVE', 'badge-accent': cell.object == 'ACTION' }"
					>
						{{ cell.object }}
					</div>
				</div>
				<div class="text-center px-2 text-3xl" :class="{ 'text-xl': cell.object == 'ACTION', 'text-3xl': cell.object != 'ACTION' }">
					{{ cell.pointer }}<span class="text-sm ml-1">{{ cell.object == 'ABSOLUTE' ? '秒' : cell.object == 'RELATIVE' ? '秒後' : '' }}</span>
				</div>
				<div class="text-lg text-center p-3">
					{{ cell.content }}
				</div>
			</div>
		</div>
	</div>
</template>
