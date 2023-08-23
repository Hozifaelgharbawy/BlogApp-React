import Card from 'react-bootstrap/Card';
import "./posts.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const PostBage = () => {
    const { id } = useParams()
    const [postbage, setPostbage] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPostbage(data)
            })
    }, [id])
    return (
        <div className='data-card'>
            <Card className='card' key={id}>
                <Card.Header className='header-card'> User Id : {postbage.userId}</Card.Header>
                <Card.Body>
                    <Card.Title className='title-card'>Title</Card.Title>
                    <Card.Text className='text-card'>{postbage.title}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title className='title-card'>Body</Card.Title>
                    <Card.Text className='text-card'>{postbage.body}</Card.Text>
                </Card.Body>
            </Card>

        </div>
    )
}

export default PostBage;