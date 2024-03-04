<script setup lang="ts">
	const {} = usePLprotoStore();
	const { follow } = useOpemodeStore();
</script>
<template>
	<div>
		<div class="h-96 flex items-center justify-center">
			<div class="w-64">
				<div class="text-center">
					<div class="text-sm font-semibold">P-Net (system)</div>
					<div class="m-2 p-2 bg-emerald-100 border-4 rounded-md font-bold">CONNECT</div>
				</div>
				<div class="text-center">
					<div class="text-sm font-semibold">P-Net (talk)</div>
					<div class="m-2 p-2 bg-emerald-100 border-4 rounded-md font-bold">CONNECT</div>
				</div>
				<div class="text-center">
					<div class="text-sm font-semibold">Operation</div>
					<div class="m-2 p-2 bg-emerald-100 border-4 rounded-md font-bold">REMOTE</div>
				</div>
				<div class="text-center mt-6">
					<button class="btn btn-error btn-outline">オペレーション同期解除</button>
				</div>
			</div>
		</div>
		<div v-if="follow" class="h-96 bg-slate-500 text-white flex items-center justify-center">
			<div class="border-2 border-white p-6 text-4xl">
				<div class="text-center mb-3">AUTO</div>
				<div class="text-center text-sm">操作の必要はありません</div>
			</div>
		</div>
		<div v-else>
			<div class="h-48 px-3 flex items-center">
				<button class="w-full btn btn-primary btn-lg">セクション送り</button>
			</div>
			<div class="h-48 flex">
				<div class="w-1/2 px-3 text-center">
					<button class="w-full btn btn-outline btn-lg">前のレイヤーへ</button>
				</div>
				<div class="w-1/2 px-3 text-center">
					<button class="w-full btn btn-outline btn-lg">次のレイヤーへ</button>
				</div>
			</div>
		</div>
	</div>
</template>
