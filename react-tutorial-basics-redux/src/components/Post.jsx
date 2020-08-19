import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then( res => {
            this.setState({ post: res.data  });
        }).catch( err => console.error(err))
    }
    render() {
        const post = this.state.post ? (
            <div className="post card bg-red">
                <div className="card-content">
                    <h1 className="card-title red-text">{this.state.post.title}</h1>
                    <h3>{this.state.post.body}</h3>
                </div>
            </div>
        ) : ( 
            <div className="center">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )

        return (
            <div className="container">
                <h4>{this.state.id}</h4>
                { post }
            </div>
        )
    }
}

export default Post;