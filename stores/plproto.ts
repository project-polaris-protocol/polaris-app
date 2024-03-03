import { defineStore } from 'pinia';
import type Metadata from '~/types/meta';
import type Layerdata from '~/types/layer';

export const usePLprotoStore = defineStore(
	'usePLprotoStore',
	() => {
		const metadata = ref<Metadata>(null);
		const layerdata = ref<Layerdata[]>([]);
		const layerIndex = ref<Number>(0);
		const setMetadata = (meta: Metadata) => {
			metadata.value = meta;
		};
		const setLayerdata = (layer: Layerdata[]) => {
			layerdata.value = layer;
		};
		const setLayerIndex = (index: Number) => {
			layerIndex.value = index;
		};
		return { metadata, layerdata, layerIndex, setMetadata, setLayerdata, setLayerIndex };
	},
	{
		persist: {
			storage: persistedState.localStorage,
		},
	}
);
