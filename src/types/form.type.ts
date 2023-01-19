type Value = string | number | boolean | null | ArrayBuffer

export interface IForm {
	type: string
	name: string
	value?: Value
	placeholder: string
	required: boolean
	label: string
	error: string
}

export interface IFormState {
	[key: string]: {
		value: Value
		error: string
	}
}
