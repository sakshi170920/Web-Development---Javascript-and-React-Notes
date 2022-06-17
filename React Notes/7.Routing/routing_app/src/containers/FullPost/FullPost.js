import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post : null
    }
//     Called immediately after updating occurs. Not called for the initial render.
// The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null
    componentDidMount(){
        this.loadData();
    }
    componentDidUpdate(){
        this.loadData();
    }

    loadData(){
        if(this.props.match.params.id)
        {                                                      //its a str so convert to no. 
            if(!(this.state.post) || this.state.post.id !== +this.props.match.params.id)
            {
                console.log(this.props);
                axios.get(`/posts/${this.props.match.params.id}`)
                .then( response =>{
                    //dont call setState directly it will go in infinte loop
                    this.setState({post:response.data});
                });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.match.params.id}`)
        .then( response =>{
            console.log(response);
        });
    }
    render () {
        let post = <p style={{textAlign:"center"}}>Please select a Post!</p>
        if(this.props.match.params.id)
        {
            post = <p style={{textAlign:"center"}}>Loading...!</p>;
            if(this.state.post)
            {
                post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}> Delete</button>
                    </div>
                </div>
                );
            }
        }
        return post;
    }
}

export default FullPost;