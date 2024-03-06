<script setup lang="ts">
	import Header from '~/components/header.vue';
	import ControllPanel from '~/components/controllpanel.vue';
	import ChatRoom from '~/components/chatroom.vue';
	import LiveScript from '~/components/LiveScript.vue';
	const { metadata, sheetdata } = usePLprotoStore();
</script>
<template>
	<LiveScript />
</template>
