<script setup lang="ts">
	const { metadata, layerdata, layerIndex } = usePLprotoStore();
</script>
<template>
	<div v-if="metadata">
		<div class="navbar bg-base-100">
			<div class="flex-1">
				<div class="flex">
					<div class="font-semibold text-xl">
						{{ metadata.projectName }}
					</div>
					<div>{{ layerdata[layerIndex] }}</div>
				</div>
			</div>
			<div class="flex-none">
				<img src="/logo_text.png" class="h-16" />
			</div>
		</div>
	</div>
</template>
