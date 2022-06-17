import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from '../../axios';
class Blog extends Component {
    state = {
        posts : [],
        postSelectedId : null,
        error: false
    }
    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount(){
        //.get works async
        axios.get("/posts")
        .then(
            response => {
                console.log(response);
                //this.setState must call after promise is finished
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map( post=>{
                    
                    return { ...post , author : 'Max'};
                })           
                this.setState({posts : updatedPosts});
            })
        .catch( () => {
            this.setState({error : true});
        });
    }

    postSelectedHandler = id=>{
        this.setState({postSelectedId : id});
    }
    render () {
        let posts = <p>Something went wrong !</p>;
        if(!this.state.error)
        posts = this.state.posts.map( post=> (
            <Post key={post.id} title={post.title} author={post.author} onClick={this.postSelectedHandler.bind(this,post.id)}/>
        ));
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.postSelectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;