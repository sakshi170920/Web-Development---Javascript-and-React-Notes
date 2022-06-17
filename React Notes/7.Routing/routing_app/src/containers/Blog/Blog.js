import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts';
import {Route,NavLink,withRouter, Switch, Redirect} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
const asyncNewPost = asyncComponent( ()=> {
    return import("../NewPost/NewPost");
}); 
class Blog extends Component {
    state ={
        auth : true,
    }
    render () {  
       // console.log(this.props);
        return (
            <div  className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <a></a> Anchor tag reloads the entire page but we jst ant to re render a component so use NavLink */}
                            <li><NavLink 
                            to="/posts/" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: 'orange',
                                textDecoration : "underline"
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                // NavLink by default always takes absolute path. so domain/new-post even thou your curr page is domain/Posts
                                // to have relative pathi.e append /new  post to current domain use pathname: this.props.match.url + "/new-posts" 
                                pathname: this.props.match.url+  "new-post",
                                hash:"#submit",
                                search:"?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* path=x means if 
                the path starts from x , render this
                if we add exact i.e only if the full path matches with x then render this */}
                {/* <Route path="/" render={ ()=> <h1>Home</h1>}/>
                <Route path="/" exact render={ ()=> <h1>Home 2</h1>}/> */}

                {/* Switch tells to render only the first matched component otherwise for new-pot both new-post & :id rendered*/}
                <Switch>                                               
                {/*   asyncNewPost:        Lazy loading ROuting , downloaded only when needed */}
                    {this.state.auth ? <Route path="/new-post" exact component={asyncNewPost}/> : null}
                    <Route path="/posts" component={Posts}/>
                    {/* from is used only inside switch where we use any one path inside switch cases */}
                    <Route render={()=><h1>Not found</h1>}/>
                    {/* <Redirect from="/" to="/posts"/> */}

                    {/* ROute with no path catches everythin whose page not found . and must be used at last.
                    like if auth is false /new-post is catched by it.
                    one imp thng is route with no path and redirect with from="/" cant be use together bcoz path catches everything
                    so use only one at time */}

                </Switch> 

            </div>
        );
    }
}

export default withRouter(Blog);