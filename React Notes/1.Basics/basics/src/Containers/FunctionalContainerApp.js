// import React , {useState} from 'react';
// import Person from './Person/Person';
// import styles from './App.module.css';
// // useState is a React Hook that lets you add React state to function components.
// //Now functional components can also do state handling and re render
// //it uses useState() for that
// //only difference in useState and setState is that useState overwrites everything
// //so for multiple cproperites to change we can call useState mulliple times

// //functional Container component
// const functionalApp = props  =>{
//     //useState return an array of two elements everytime
//     //first element is current state
//     //second element is a function which will allow us to change that state 
//     //and tell react to re render as state has been changed 
//     const [personsState , usePersonsState] = useState({
//         persons : [
//             {name:"Sakshi" , age:20},
//             {name:"Max" , age:24},
            
//           ],
//     });
//     const [otherState , useOtherState] = useState({
//           other : "other Value"
//     });

//     const switchNameHandler = newName=>{
//         console.log("I am clicked");
//         usePersonsState({ //setSate will trigger render() and the properites we pass here
//                       //like persons it will look for them in state and over write our changes in persons property only in state variable
//           persons: 
//           [
//             {name:"Sakshi" , age:21},
//             {name:"John" , age:24},
//           ]
//          });
//       }
//       console.log(personsState);//personstate will overwrite all variables so we have to always declare pervious variables
//       //like other : "other Value" when we call personSate to that be include
//       //userPersonsState does not merge old values , it overwrites
//       //class state instead merges previous values


//       //Alternative approach is call another useState()
//       console.log(personsState,otherState);
//     return (
//     // developers a syntatical sugar
//     <div className={styles.App}>
//     <h1>Welcome to React !</h1>
//     <button onClick={switchNameHandler}>Switch Name</button> {/* don't say this.switchNameHandler as we are no inside
//     a class so this doesnt mean the object */}
//     <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies : Music</Person> 
//     <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies : Dance</Person> 
//     {/* <p>{.other}</p> */}
//     </div>
//     );
// }

// export default functionalApp;