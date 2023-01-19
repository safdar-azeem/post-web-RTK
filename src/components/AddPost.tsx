import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IForm, IFormState } from '../types/form.type'
import { IPost } from '../types/post.type'
import formJson from '../jsons/formPost.json'
import useForm from '../hooks/useForm'
import { useAddPostMutation } from '../store/slices/postSlice'
import { useAppDispatch } from '../hooks/store'

const AddPost = () => {
	const navigate = useNavigate()
	const [trigger, result] = useAddPostMutation()
	const { form, handleChange, doValidate } = useForm(formJson)

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (!doValidate()) return
		const { title, description, image } = form
		const post: IPost = {
			title: title.value as string,
			description: description.value as string,
			image: image.value as string,
		}
		await trigger(post)
		navigate('/')
	}

	return (
		<form
			className='mx-auto'
			style={{ width: '550px' }}
			onSubmit={handleSubmit}>
			{formJson.map((input: IForm) => {
				return (
					<div
						className='mb-3'
						key={input.name}>
						<label
							htmlFor={input.name}
							className='form-label'>
							{input.label}
						</label>
						<input
							className='form-control'
							type={input.type}
							name={input.name}
							onChange={handleChange}
							id={input.name}
							placeholder={input.placeholder}
						/>
						{form[input.name].error && (
							<div className='my-2 text-danger'>
								{form[input.name].error}
							</div>
						)}
						{input.type === 'file' && form[input.name].value && (
							<div>
								<img
									src={form[input.name].value?.toString()}
									alt=''
									className='img-fluid mt-4'
									style={{ width: '200px' }}
								/>
							</div>
						)}
					</div>
				)
			})}
			<button className='btn btn-lg w-100 btn-success'>Submit</button>
		</form>
	)
}

export default AddPost
