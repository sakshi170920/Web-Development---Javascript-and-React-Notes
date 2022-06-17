import React,{ Component } from "react";

//importComponent must be a function which is a promise

const asyncComponent = (importComponent)=>{
    return class extends Component{
        state = {
            component : null,
        }

        componentDidMount(){
            importComponent()
            .then( cmp=>{
                this.setState({component : cmp.default});
            })
        }
        render(){
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;