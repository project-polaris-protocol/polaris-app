import { defineStore } from 'pinia';
import type Metadata from '~/types/meta';
import type Layerdata from '~/types/layer';

export const usePLprotoStore = defineStore(
	'meta',
	() => {
		const metadata = ref<Metadata>();
		const layerdata = ref<Layerdata[]>([]);
		const layerIndex = ref<Number>(0);
		const setMetadata = (meta: Metadata) => {
			metadata.value = meta;
		};
		const setLayerdata = (layer: Layerdata) => {
			layerdata.value = layer;
		};
		const setLayerIndex = (index: Number) => {
			layerIndex.value = index;
		};
	},
	{
		persist: {
			storage: persistedState.localStorage,
		},
	}
);
