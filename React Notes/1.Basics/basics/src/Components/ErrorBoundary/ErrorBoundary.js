import React , {Component} from 'react';
class ErrorBoundary extends Component{
    state = {
        hasError : false,
        message : ''
    }

    componentDidCatch = (error , info) =>{
        this.setState({hasError:false , message: info});
    }
    render(){
        if(this.state.hasError)
            return <h1>{this.state.message}</h1>;
        else
            return this.props.children;
    }
}

export default ErrorBoundary;