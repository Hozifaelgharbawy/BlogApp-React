import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './home.css';

function Home() {
    return (
        <div className="container">
            <h1>Welcom To <br /><span>BlogPosts</span> App</h1>
            <p>
                Navbar component | Home and Posts
                <br />
                Posts component | List of all posts
                <br />
                Post Details component | Details per post when i click it
            </p>
            <a className='api-link' href="https://jsonplaceholder.typicode.com/posts">API URL</a>

        </div>
    );
}

export default Home;