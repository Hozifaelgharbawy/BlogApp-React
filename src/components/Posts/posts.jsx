import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./posts.css"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPosts(data)
            })
    }, [])



    return (
        <div className='data-card'>
            {posts.map((post) => (
                <Card className='card' key={post.id}>
                    <Card.Header className='header-card'> User Id : {post.userId}</Card.Header>
                    <Card.Body>
                        <Card.Title className='title-card'>Title</Card.Title>
                        <Card.Text className='text-card'>{post.title}</Card.Text>
                    </Card.Body>
                    <Link to={`/posts/${post.id}`}>
                        <Button className='btn-card' variant="primary">View body</Button>
                    </Link>
                </Card>
            ))}
        </div>
    )
}

export default Posts;