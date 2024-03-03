import type { Layerdata } from '~/server/types/layer.ts';
import fs from 'fs';
export default defineEventHandler(async (event: any) => {
	const meta_: any = await import('~/data/meta.json');
	const meta: Metadata = meta_.default;
	const files = fs.readdirSync('data/layer');
	let layers = new Array(files.length).fill(null);
	for (let i = 0; i < files.length; i++) {
		let rawdata = fs.readFileSync(`data/layer/${files[i]}`);
		const layer: Layerdata = JSON.parse(rawdata);
		if (layer.projectCode === meta.projectCode) {
			layers[layer.layerIndex] = layer;
		} else {
			continue;
		}
	}
	return layers;
});
