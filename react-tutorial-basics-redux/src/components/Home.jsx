import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => {
            this.setState({ posts: res.data })
        })
        .catch(err => console.error(err))
    }
    
    render() {
        const postList = this.state.posts.length ? (
            this.state.posts.map(post => (
                <div key={post.id} className="post card">
                    <div className="card-content">
                        <Link to={'/'+post.id} className="pink-text darken-5">
                            <span className="card-title">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
                ))
            ) : (
                <div className="center">You don't have any posts :(</div>
        )
        return (
            <div className="container">
                <h4 className="center">This is my home page </h4>
                { postList }
            </div>
        )
    }
}

export default Home;