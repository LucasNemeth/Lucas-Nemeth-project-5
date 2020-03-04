import React, { Component } from 'react';
import firebase from './firebase';
import FormToggle from './FormToggle.js';
import PrintDisplay from './PrintDisplay.js'
// import Granim from 'react-granim';
import 'font-awesome/css/font-awesome.min.css';


import './App.css';
//----------------------Constructor Start--------------------//
class App extends Component {
  constructor(){
    super();

    // const gradient = new Granim({
    //   element: '#canvas-basic',
    //   direction: 'top-bottom',
    //   isPausedWhenNotInView: true,
    //   states: {
    //     "default-state": {
    //       gradients: [
    //         ['#111111', '#003300'],
    //         ['#000000', '#004800'],
    //         ['#111111', '#00ce00']
    //       ]
    //     }
    //   }
      
    // });
    
    this.state={
      newCharacter:[],
      charName:'',
      charClass:'',
      charLvl:'',
      imageUrlInput:'',
      showNewCharForm:false,
      showDisplayInfo:false,
      test: [],
      
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

  }

//--------------------------Event prevent default--------------------------//

  handleFormSubmit = (e, userInput) => {
    e.preventDefault();

    console.log('hi')

    const dbRef = firebase.database().ref();
    const charObject = {
      charName: userInput.charName,
      charClass: userInput.charClass,
      charLvl: userInput.charLvl,
      charJournal: userInput.charJournal,
      imageUrlInput: userInput.imageUrlInput,
      charInventory: userInput.charInventory
    }


    dbRef.push(charObject);
    console.log(charObject)

    this.setState({
      charName: userInput.charName,
      charClass: userInput.charClass,
      charLvl: userInput.charLvl,
      charJournal: userInput.charJournal,
      imageUrlInput: userInput.imageUrlInput,
      charInventory: userInput.charInventory
    })
    console.log(this.state)
  }

  addCharacter =(characterKey)=>{
    const dbRef = firebase.database().ref()
    dbRef.child(characterKey).push();
    console.log(this.state.addCharacter)
  }

  showForm = (e) =>{
    e.preventDefault();
    this.setState({showNewCharForm:true})
  }
  
  displayInfo = (key) => {
    const characterToShow = this.state.newCharacter.filter(item => item.key === key)
    this.setState({
      showDisplayInfo:true,
      showCharacter: characterToShow,
    })
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
              {/* {this.state.newCharacter.map((character, index)=>{
                return ( */}
                  <div className="charContainer">
                    <li >
                      <a href="">
                        <div className="charButtons">
                          <button className="newCharButton" onClick={
                            this.showForm
                          }>
                            <i className="fa fa-plus-square"></i>
                          </button>
                        </div>
                      </a>
                    </li>
                  </div>
                {this.state.newCharacter.map((character, index) => {
                  console.log(character.key)
                  return (
                    <div key={index}>
                      <li >
                        <a>
                          <div className="createdChar">
                            <button 
                              className="createdCharButton" 
                              onClick={(e) => this.displayInfo(character.key)}
                              >
                              <div className="imgContain">
                                <i className="fa fa-user-circle" font-size="5rem"></i>
                              </div>
                            </button>
                            <button className="deleteButton" onClick={() => { this.removeChar(character.key) }}>delete</button>

                          </div>
                        </a>
                      </li>
                      
                    </div>
                    
                )
              })}
            </ul>
            {/* <FormToggle fromPapa={this.handleFormSubmit} /> */}
            {this.state.showDisplayInfo ?
              <PrintDisplay
                displayParent={this.displayInfo}
                char={this.state.showCharacter}
              />
              : null}
            {this.state.showNewCharForm ? 
              <FormToggle 
                fromPapa={this.handleFormSubmit} 
                // fromChangeParent={this.handleChange} 
              /> 
              : null}
            
          </div>
        </main>
        {/* <Granim id="granim"></Granim> */}
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