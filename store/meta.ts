import { defineStore } from 'pinia';
import meta from '~/data/meta.json';

export const useMetaStore = defineStore('meta', {
	state: () => {
		return meta;
	},
});
