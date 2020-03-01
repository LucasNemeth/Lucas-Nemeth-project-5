import React, { Component } from 'react';
import firebase from './firebase';
import 'font-awesome/css/font-awesome.min.css';
import GoogleFontLoader from './GoogleFontLoader.js';

import './App.css';
//----------------------Constructor Start--------------------//
class App extends Component {
  constructor(){
    super();

    this.state={
      newCharacter:[],
      charName:'',
      charClass:'',
      
    }
    this.handleChange=this.handleChange.bind(this);
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

    });
  }

  handleChange(e){
    this.setState({[e.target.name]:e.target.value});
    // this.setState({ [e.charClass.name]: e.charClass.value });
  }
//--------------------------Event prevent default--------------------------//
  handleFormSubmit = (e) => {
    e.preventDefault();

    const dbRef = firebase.database().ref();
    const charObject={
      charName:this.state.charName,
      charClass:this.state.charClass,
      charLvl:this.state.charLvl,
    }


    dbRef.push(charObject);
    console.log(charObject)

    this.setState({
      charName: '',
      charClass:'',
    })
  }

  addCharacter =(characterKey)=>{
    const dbRef = firebase.database().ref()
    dbRef.child(characterKey).push();
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
                      <button className="newCharButton" onClick={(e)=>{
                        this.addCharacter(character.key)
                        e.preventDefault()
                        }}>
                        <i className="fa fa-plus-square"></i>
                      </button>
                    </a>
                  </li>
                )
              })}
            </ul>
            <div>
              <form action="submit" onSubmit={this.handleFormSubmit}>
                <label htmlFor="charName">Name: </label>
                <input
                  type="text"
                  id="charName"
                  name="charName"
                  onChange={this.handleChange}
                  value={this.state.charName}
                />
                <label htmlFor="charClass">Class: </label>
                <input
                  type="text"
                  id="charClass"
                  name="charClass"
                  onChange={this.handleChange}
                  value={this.state.charClass}
                  />
                <label htmlFor="charLvl">Level: </label>
                <input
                  type="text"
                  id="charLvl"
                  name="charLvl"
                  onChange={this.handleChange}
                  value={this.state.charLvl}
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
  

export default App;
