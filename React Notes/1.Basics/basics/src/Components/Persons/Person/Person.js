import React from 'react';
 import styles from './Person.module.css'; //we are using styled
// import styled from 'styled-components';
//functional components //Stateless Component

//declare styled component outside
// const StyledDiv = styled.div`
// width: 60%;
// margin: 16px auto;
// border: 1px solid #eee;
// box-shadow: 0px 3px 2px #ccc;
// padding: 16px;
// text-align: center;

// @media (min-width:500px) {
//     width: 450px;
// }
// `
const person = (props)=>{ //props contain all properites of person
    // const style = {
    //     '@media (min-width:500px)':{
    //         width:'450px',
    //     }
    // }

    // styled.div`` returns an react component with our specified styles

    return (

        <div className={styles.Person}>
        {/* <div className="Person" style = {style}> */}
            <p onClick={props.onClick}>Hey ! I'm a {props.name} and I'm {props.age} old</p>
            <p>{props.children}</p>
            {/* {props.children} */}
            <input type="text" onChange={props.onChange} value={props.name}/> 
            {/* value : The initial value of the control. */}
            {/* {ou provided a `value` prop to a form field without an `onChange` handler this will render a read-only field. } */}
        {/* </div> */}
        </div>

    );
}

export default person;