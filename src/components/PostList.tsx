import { IPost } from '../types/post.type'
import Post from './Post'
import { useAppSelector } from '../hooks/store'
import { useGetPostsQuery } from '../store/slices/postSlice'

const PostList = () => {
	const { data, error, isLoading } = useGetPostsQuery()

	console.log('isLoading', isLoading)
	console.log('error', error)
	console.log('post data', data)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error || !data) {
		return <div>{error}</div>
	}

	return (
		<div className='row row row-cols-3 gy-4 mt-4'>
			{data.posts.length > 0 &&
				data.posts.map((post: IPost) => {
					return (
						<Post
							post={post}
							key={post._id}
						/>
					)
				})}
		</div>
	)
}

export default PostList
