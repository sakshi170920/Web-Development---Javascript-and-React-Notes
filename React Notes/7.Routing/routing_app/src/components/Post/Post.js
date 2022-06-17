import React from 'react';
import {withRouter} from 'react-router-dom';
import './Post.css';

const post = (props) => {

    //even thou it is included in Posts component the router props are not propagated to post.
    //When wrapped with : withRouter the given component gets router info of nearest above router component
    return (
        
    <article className="Post" onClick={props.onClick}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>);
};

export default withRouter(post);