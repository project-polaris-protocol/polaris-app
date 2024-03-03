interface Celldata {
	object?: 'ABSOLUTE' | 'RELATIVE' | 'ACTION';
	color: string;
	pointer: Number | String;
}

export interface Programdata {
	projectCode: string;
	programName: string;
	programIndex: Number;
	programNumber: string;
	stt: Date | null;
	end: Date | null;
	aud: string;
	iss: string;
	isc: string;
	body: Array<Array<Celldata>>;
}
