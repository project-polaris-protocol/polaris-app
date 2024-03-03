<script setup lang="ts">
	const { metadata, layerdata, layerIndex } = usePLprotoStore();
</script>
<template>
	<div class="">
		<div class="navbar bg-base-100">
			<div class="flex-1">
				{{ metadata }}
			</div>
			<div class="flex-none">
				<img src="/logo_text.png" class="h-16" />
			</div>
		</div>
	</div>
</template>
