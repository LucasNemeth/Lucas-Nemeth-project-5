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
      // imageUrlInput:'',
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

    const dbRef = firebase.database().ref();
    const charObject = {
      charName: userInput.charName,
      charClass: userInput.charClass,
      charLvl: userInput.charLvl,
      charJournal: userInput.charJournal,
      // imageUrlInput: userInput.imageUrlInput,
      charInventory: userInput.charInventory
    }


    dbRef.push(charObject);

    this.setState({
      charName: userInput.charName,
      charClass: userInput.charClass,
      charLvl: userInput.charLvl,
      charJournal: userInput.charJournal,
      // imageUrlInput: userInput.imageUrlInput,
      charInventory: userInput.charInventory
    })
  }

  addCharacter =(characterKey)=>{
    const dbRef = firebase.database().ref()
    dbRef.child(characterKey).push();
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


//-----------------------error handling------------------------------//
  

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
              <div className="charContainer">
                <li >
                  <a href="#">
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
              return (
                <div key={index}>
                  <li >
                    <a href="#">
                      <div className="createdChar">
                        <button 
                          className="createdCharButton" 
                          onClick={(e) => this.displayInfo(character.key)}
                          >
                          <div className="imgContain">
                            <i className="fa fa-user-circle" fontSize="5rem"></i>
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
      </div>
      
    );
  }
}
  

export default App;


// To-Do:

// Have avatar images/ something to identify a made character.  :( 
  // Unfortunately didn't get a chance to finish this. brain shut down last night. will come in patch 1.2.0