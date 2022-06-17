import React, { Component} from 'react';
import styles from './App.module.css';
import Person from '../Components/Persons/Person/Person';
import Radium,{StyleRoot}  from 'radium';
import styled from 'styled-components';
import ErrorComponent from '../Components/ErrorBoundary/ErrorComponent';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

//Every React component has to render / return html code for screen

//inline  style written in JS before render fun
// const style = {
//   backgroundColor :'green',
//   border : "1px solid blue",
//   font : "inherit",
//   padding : "8px",
//   cursor: "pointer",
//   color: "white",
//   //using Radium we can add pseudo selectors to inline styles , also wrap tat component inside Radium to apply them.
//   ':hover' : {
//     backgroundColor:"lightgreen",
//     color:"black"
//   }
// };

//syntax for styled.component is same like css so remove single quotes,add ;, and CamelCase naming, also add & before pseudo selectors.
//styled components does the magic of converting css to equivalen js code
const StyledButton = styled.button`

  background-color : ${props => props.showPersonsStatus ? 'red' : 'green'};
  border : 1px solid blue;
  font : inherit;
  padding : 8px;
  cursor: pointer;
  color: white;
  &:hover  {
    background-color: ${props => props.showPersonsStatus ? 'salmon' : 'lightgreen'};
    color:black;
  }

`;

class App extends Component {
  state = { //state is react component which when changed calls render to re - render our dom
    persons : [
      {id:'gdgfd11', name:'Max', age:21},
      {id:'dgh22', name:"John" , age:24},
      {id:'jyku233',name:"Lara" , age:28},
      
    ],
    other : "other Value",
    showPersons: false,
  }

  switchNameHandler = newName=>{
    console.log("I am clicked");
    this.setState({ //setSate will trigger render() and the properites we pass here
                  //like persons it will look for them in state and over write our changes in persons property only in state variable
      persons: 
      [
        {id:'gdgfd11', name:newName, age:21},
        {id:'dgh22', name:"John" , age:24},
        {id:'jyku233',name:"Lara" , age:28},
      ]
     });
  } 

  inputNameHandler = (id,event) =>{
    const personIndex = this.state.persons.findIndex( p=>
      { return p.id === id});
    const person = {...this.state.persons[personIndex]};//better to make a copy always
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({
      persons: persons
    });
  }

  togglePersons = ()=>{
    this.setState({showPersons : !this.state.showPersons});
  }

  // you should always make changes on copy of an object and retur nthe copy to setState
  // don't make changes on real one
  deletePersonHandler = (index)=>{
    //console.log(index,"delete");
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
    //console.log(this.state.persons);
  }

  render() //ver important
  {
    //inline CSS limitations : hover styles cannnot be done
    // const style = {
    //   backgroundColor :'green',
    //   border : "1px solid blue",
    //   font : "inherit",
    //   padding : "8px",
    //   cursor: "pointer",
    //   color: "white",
    //   //using Radium we can add pseudo selectors to inline styles , also wrap tat component inside Radium to apply them.
    //   ':hover' : {
    //     backgroundColor:"lightgreen",
    //     color:"black"
    //   }
    // };

     {/* More elegant approach is handle if conditions before return when render is called */}
    let persons = null;
    if(this.state.showPersons)
    {
      persons = (
        <div>
          {/* map function ot dynamically return each element */}
          {this.state.persons.map((person,index)=>{
           return <Person 
            name={person.name} 
            age={person.age} 
            onClick={this.deletePersonHandler.bind(this,index)}
            key={person.id} 

            // Note, that the event parameter should be the last parameter in the handler function

            // function clickMe(parameter, event){
            // }
            
            // <button onClick={this.clickMe.bind(this, someParameter)}></button>
            onChange={this.inputNameHandler.bind(this,person.id)}  
            // React requires a key attribute for lists , bcoz it compares data from virtualDom(future) and presnet to know the changes
            // and what specific element it must render for that we require a primary key assoicated with each data of list
            // dont use index bcoz it gets reassigned every time ,mostly all database have a primary key use that instead
            // this helps react to render lists efficiently instead of fetching entire list all the time        
            />
          })}
          
        </div>

      );
      //dynamically change style
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: "salmon",
      //   color:'black',
      // }

      } 

    //dynamically assign classes
    const classes = [];
    if(this.state.persons.length<=2)
        classes.push(styles.red);
    if(this.state.persons.length <=1)
        classes.push(styles.bold);
    return ( 
      // This looks like HTML code , but its not HTML
      //  it is JSX code , i.e behind its a javascript code which generates/renders this html code and provide the
      // developers a syntatical sugar

      //when using radium for media queries wrap app into StyledRoot
      <StyleRoot> 
      <div className={styles.App}>
        <h1>Welcome to React !</h1>
        <p className={classes.join(" ")}>This is really working !</p>
        {/* <button style={style} onClick={this.switchNameHandler.bind(this,"Oswal")}>Switch Name</button> */}
        {/* bind is a more efficient way to pass paramters to a function passed */}
        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies : Music</Person> 
        <Person onClick={()=> this.switchNameHandler("max !!!")} name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies : Dance</Person> 
        <Person onChange={this.inputNameHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies : Football</Person> */}
        {/* An alternative approach to pass a function with parameters is like a calbakc func above but its inefficient */}
        {/* <p>{this.state.other}</p> */}
        <StyledButton onClick={this.togglePersons} showPersonsStatus={this.state.showPersons}>Toggle Persons</StyledButton>
        {/* We cannot have if conditions inside JSX but ternary operator is allowed like following */}
        {/* { this.state.showPersons ?
                <div>
                <Person onChange={this.inputNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies : Music</Person>
                <Person onChange={this.inputNameHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies : Dance</Person>
                <Person onChange={this.inputNameHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies : Football</Person>
                </div>
                : null 
        } */}
        {/* More elegant approach is handle if conditions before return when render is called */}
        {persons}
        {/* <ErrorBoundary>
          <ErrorComponent text="Hey no error"></ErrorComponent>
        </ErrorBoundary> */}

      </div>
      </StyleRoot>

      //<p>Hello</p>
      //We cant add multiple html elements bcoz every component must have ones single root in react

      //In Backend above code is converted to following :
      //React.createElement('div',{className:App}, React.createElement('h1',null,"Hey Sakshi here !"))
      //hence we import React to render it even thou we dont use it
    );
  }
}
//if you import App.js you by default get App component
export default Radium(App);
