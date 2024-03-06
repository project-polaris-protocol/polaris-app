<script setup lang="ts">
	const testsection = [
		[{ object: 'ABSOLUTE', color: '#000000', pointer: '32', content: '照明点滅' }],
		[{ object: 'RELATIVE', color: '#000000', pointer: '10', content: '照明消灯' }],
		[{ object: 'ACTION', color: '#000000', pointer: 'asdasdasdasdのタイミングで', content: '照明点灯' }],
	];
</script>
<template>
	<div>
		<div class="p-6">
			<div class="h-42 rounded-xl p-3 flex items-center justify-center">
				<div class="w-1/2 text-center font-bold text-5xl text-primary">
					<span class="font-normal text-lg mr-2">経過時間:</span>
					123
				</div>
				<div class="w-1/2 text-center font-bold text-5xl text-secondary">
					<span class="font-normal text-lg mr-2">状態継続時間:</span>
					15
				</div>
			</div>
		</div>
		<div class="p-4">
			<div v-for="row in testsection" class="flex">
				<div v-for="cell in row" :style="`border-color: ${cell.color}`" class="border-4 rounded-xl p-3 m-3 w-full">
					<div class="text-center">
						<div
							class="mx-2 mb-4 rounded-xl badge-sm"
							:class="{ 'badge-primary': cell.object == 'ABSOLUTE', 'badge-secondary': cell.object == 'RELATIVE', 'badge-accent': cell.object == 'ACTION' }"
						>
							{{ cell.object }}
						</div>
					</div>
					<div class="text-center px-2" :class="{ 'text-2xl': cell.object == 'ACTION', 'text-4xl': cell.object != 'ACTION' }">
						{{ cell.pointer }}<span class="text-lg ml-1">{{ cell.object == 'ABSOLUTE' ? '秒' : cell.object == 'RELATIVE' ? '秒後' : '' }}</span>
					</div>
					<div class="text-xl text-center p-3 mt-4">
						{{ cell.content }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
