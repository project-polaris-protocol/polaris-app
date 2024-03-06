<script setup lang="ts">
	import Header from '~/components/header.vue';
	import ChatRoom from '~/components/ChatRoom.vue';
	import LiveScript from '~/components/LiveScript.vue';
	import ControllPanel from '~/components/ControllPanel.vue';
</script>
<template>
	<div>
		<Header />
		<div class="flex pt-4">
			<div class="w-1/3 px-3 max-w-xl">
				<ChatRoom />
			</div>
			<div class="w-full px-3">
				<LiveScript />
			</div>
			<div class="w-1/6">
				<ControllPanel />
			</div>
		</div>
	</div>
</template>
