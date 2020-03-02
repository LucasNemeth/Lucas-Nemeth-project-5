import React, { Component } from 'react';
import firebase from './firebase';
import FormToggle from './FormToggle.js'
import 'font-awesome/css/font-awesome.min.css';
import GoogleFontLoader from './GoogleFontLoader.js';

import './App.css';
//----------------------Constructor Start--------------------//
class App extends Component {
  constructor(){
    super();

    this.state={
      newCharacter:[],
      // charName:'',
      // charClass:'',
      // charLvl:'',
      charObject:{},
      showNewCharForm:false
      
    }
    // this.handleChange=this.handleChange.bind(this);   
    this.handleChange=()=>{
      this.handleChange(this);
    }
  }
  
  componentDidMount(){
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) =>{
      const newState = [];
      const data = response.val();


      for (let key in data){
        const characterInfo={
          key:key,
          name:data[key]
        }
        // newState.push(data[key]);
        newState.push(characterInfo)
      }
      this.setState({
        newCharacter: newState
      });
    })

    dbRef.on('value', (response) => {
      console.log(dbRef)
    });
  }

  handleChange(e){
    this.setState({[e.target.name]:e.target.value});
    // this.setState({ [e.charClass.name]: e.charClass.value });
  }
//--------------------------Event prevent default--------------------------//

  handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('hi')

    const dbRef = firebase.database().ref();
    const charObject={
      charName:this.state.charName,
      charClass:this.state.charClass,
      charLvl:this.state.charLvl,
      charJournal:this.state.charJournal,
    }

    dbRef.push(charObject);
    console.log(charObject)

    this.setState({
      charName: '',
      charClass:'',
      charLvl:'',
      charJournal:'',
    })
  }

  addCharacter =(characterKey)=>{
    const dbRef = firebase.database().ref()
    dbRef.child(characterKey).push();
    console.log(this.state.addCharacter)
  }

  showForm = (e) =>{
    e.preventDefault();
    this.setState({showNewCharForm:true})
    console.log('showForm clicked')
  }
  

//-----------------------removing character-------------------------//
  removeChar = (characterKey) => {
    const dbRef = firebase.database().ref();
    dbRef.child(characterKey).remove();
  }
//---------------------------render-------------------------------//
  render() {
    return (
      <div className="App">
        <header>
          <div className="wrapper">
            <h1>Adventure Base</h1>
          </div>
        </header>
        <main>
          <div className="wrapper">
            <h2>My Characters</h2>
            <ul>
              {this.state.newCharacter.map((character, index)=>{
                return (
                  <li key={index}>
                    <a href="">
                      <div className="charButtons">
                        <button className="newCharButton" onClick={
                          this.showForm
                        }>
                          <i className="fa fa-plus-square"></i>
                        </button>
                        <button className="deleteButton" onClick={() => { this.removeChar(character.key)}}>delete</button>

                        {/* trying a thing to store info into button */ }
                        {/* <div>
                          <newCharButton newChar={this.state.charObject} />
                          <addCharacter changed={this.manipulator} />
                        </div> */}

                        
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
            {/* <FormToggle fromPapa={this.handleFormSubmit} /> */}
            {this.state.showNewCharForm ? <FormToggle fromPapa={this.handleFormSubmit} /> : null}
            
            
          
          </div>
        </main>
      </div>
    );
  }
}
  

export default App;


// To-Do:

//handleSubmitFunction data must be passed to the Child in FormToggle. 

// store the input data into the character buttons
  //on click of character buttons, bring up the info that's been inputed. 

// Have avatar images/ something to identify a made character. 