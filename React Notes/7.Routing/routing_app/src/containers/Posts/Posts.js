import React , { Component } from "react";
import { Route , Link } from "react-router-dom";
import axios from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';
class Posts extends Component{
    state = {
        posts : [],
        postSelectedId : null,
        error: false
    }
    //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount(){
       // console.log(this.props) ;//router props

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
        // this.props.history.push("/posts"+id);
        this.props.history.push({pathname: "/posts/" +id});
    }
    render(){
        let posts = <p>Something went wrong !</p>;
        if(!this.state.error)
        posts = this.state.posts.map( post=> (
            // <Link to={"/posts"+post.id}  key={post.id} >
            <Post 
            key={post.id}
            title={post.title} 
            author={post.author} 
            onClick={this.postSelectedHandler.bind(this,post.id)}/>
            // </Link>
        ));
        return (
            <div>
            <section className="Posts">
                    {posts}
            </section>
            {/* Nested ROuting */}
            {/* /:x reperensts that x will be a dynamic value , now that will clash with /new-post so place it after that. */}
            <Route path={this.props.match.url+"/:id"}  exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;