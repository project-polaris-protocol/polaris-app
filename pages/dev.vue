<script setup lang="ts">
	import Header from '~/components/header.vue';
	import ControllPanel from '~/components/controllpanel.vue';
	const { metadata, sheetdata } = usePLprotoStore();
</script>
<template>
	<ControllPanel />
</template>
