import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddPost from './components/AddPost'
import Header from './components/Header'
import PostList from './components/PostList'

const App = () => {
	return (
		<div className='container mt-4'>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<PostList />}
					/>
					<Route
						path='/add-post'
						element={<AddPost />}
					/>
				</Routes>
			</Router>
		</div>
	)
}

export default App
