import { defineStore } from 'pinia';

export const useOpemodeStore = defineStore('useOpemodeStore', () => {
	const follow = ref<boolean>(true);
	const changeOperationMode = (mode: boolean) => {
		follow.value = mode;
	};
	return { follow, changeOperationMode };
});
