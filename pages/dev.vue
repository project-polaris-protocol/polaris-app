<script setup lang="ts">
	import Header from '~/components/header.vue';
	import ControllPanel from '~/components/controllpanel.vue';
	import ChatRoom from '~/components/chatroom.vue';
	const { metadata, sheetdata } = usePLprotoStore();
</script>
<template>
	<ChatRoom />
</template>
