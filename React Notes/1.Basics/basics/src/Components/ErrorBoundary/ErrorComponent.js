import React , {Component} from 'react';
class ErrorComponent extends Component{

    

    render(){
        const num = Math.random();
        if(num>0.7)
        {
            throw new Error("sorry ! bad luck");
        }
        else
        {
            return this.props.text;
        }

    }
}
export default ErrorComponent;
