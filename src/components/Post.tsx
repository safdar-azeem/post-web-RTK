import moment from 'moment'
import { useDeletePostMutation } from '../store/slices/postSlice'
import { IPost } from '../types/post.type'

interface IProps {
	post: IPost
}

const Post = ({ post }: IProps) => {
	const [deletePost] = useDeletePostMutation()

	const handleDelete = () => {
		deletePost(post._id)
	}

	return (
		<div>
			<article
				className='card'
				style={{ width: '23rem' }}>
				<img
					src={post.image?.toString()}
					className='card-img-top'
					alt='...'
				/>
				<main className='card-body'>
					<h4 className='card-title'>{post.title}</h4>
					<p className='card-text'>{post.description}</p>
				</main>
				<footer className='card-footer px-3 py-3 bg-white d-flex justify-content-between '>
					<small>{moment(post.createdAt).fromNow()}</small>
					<i
						className='fa-solid fa-trash'
						onClick={handleDelete}
						style={{
							fontSize: '22px',
						}}></i>
				</footer>
			</article>
		</div>
	)
}

export default Post
