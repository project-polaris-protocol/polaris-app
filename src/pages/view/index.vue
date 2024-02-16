<script setup lang="ts">
	import StatusPanel from '../../components/view/status.vue';
</script>

<template>
	<div>
		<div class="hidden md:flex items-center justify-center">
			<div class="w-1/3">
				<div class="p-4"><StatusPanel /></div>
			</div>
			<div class="w-1/3"></div>
			<div class="w-1/3"></div>
		</div>
	</div>
</template>
