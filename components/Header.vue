<script setup lang="ts">
	const { metadata, layerdata, layerIndex } = usePLprotoStore();
</script>
<template>
	<div v-if="metadata">
		<div class="p-3 md:p-2 md:navbar bg-base-100">
			<div class="flex-1 gap-4">
				<div class="border-primary rounded-xl border p-2 px-4">
					<div class="text-sm mb-1">
						{{ metadata.projectName }}
					</div>
					<div class="text-xl">
						<span class="text-md mr-1">{{ layerdata[layerIndex].layerNumber }}</span>
						{{ layerdata[layerIndex].layerName }}
						<span class="text-xs">(- {{ layerdata[layerIndex].end }})</span>
						<span class="text-gray-800 text-sm md:ml-3" v-if="layerIndex + 1 < layerdata.length">
							<div class="md:hidden"></div>
							<span class="mx-3">></span>
							<span class="text-md mr-1">{{ layerdata[layerIndex + 1].layerNumber }}</span>
							{{ layerdata[layerIndex + 1].layerName }}
							<span class="text-xs ml-2">({{ layerdata[layerIndex + 1].stt }} -)</span>
						</span>
					</div>
				</div>
			</div>
			<div class="hidden md:flex md:flex-none">
				<div class="text-lg mr-4">{{ metadata.aud }}</div>
				<img src="/logo_text.png" class="h-16" />
			</div>
		</div>
	</div>
</template>
