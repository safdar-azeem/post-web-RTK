import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../../types/post.type'

type IPostResponse = {
	posts: IPost[]
	message: string
	status: string
}

const postApi = createApi({
	reducerPath: 'post',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5052/api/v1' }),
	tagTypes: ['Post'],
	endpoints: (builder) => ({
		getPosts: builder.query<IPostResponse, void>({
			query: () => '/post/getPosts',
			providesTags: ['Post'],
		}),
		addPost: builder.mutation<IPostResponse, IPost>({
			query: (body) => ({
				url: '/post/addPost',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Post'],
		}),
		deletePost: builder.mutation<IPostResponse, string>({
			query: (id) => ({
				url: `/post/deletePost/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Post'],
		}),
	}),
})

export const { useGetPostsQuery, useAddPostMutation, useDeletePostMutation } =
	postApi

export default postApi
