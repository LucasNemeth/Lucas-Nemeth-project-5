import React, { Component } from 'react';
import ImgAdd from './ImgAdd'

import './App.css';



class FormToggle extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true

        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    handleImageChange = (e) => {
        // const imageToShow = this.state.imageUrlInput.filter(item => item.key === key)
        this.setState({
            imgFile: e.target.files[0],
            imgSrc: URL.createObjectURL(e.target.files[0]),
            // showImage:imageToShow
        });
        
        URL.revokeObjectURL(e.target.files[0]); //to avoid memory issues
        
    }
    

    deferred = (e) => {this.props.fromPapa(e, this.props.handleFormSubmit)}
    
    emptyState = (e) =>{
        this.props.fromPapa(e, this.state)
        this.setState({
            charName: '',
            charClass: '',
            charLvl: '',
            charJournal: '',
            charInventory:'',
            // imageUrlInput: ''
        })
        // this.setState = 
    }

    handleChange = (e) => {   //added user input
        this.setState({ [e.target.name]: e.target.value });
        // this.setState({ [e.charClass.name]: e.charClass.value });
    }

    render() {
        return (
            < div >
                <form 
                    id="charForm" 
                    action="submit" 
                    onSubmit={this.emptyState}
                    char={this.state.showImage}
                    >  {/* adding a state */}

                    <label htmlFor="charName">Name: </label>
                    <input
                        type="text"
                        id="charName"
                        name="charName"
                        onChange={this.handleChange}
                        // onChange={this.props.fromChangeParent}
                        value={this.state.charName}
                    />
                    <label htmlFor="charClass">Class: </label>
                    <input
                        type="text"
                        id="charClass"
                        name="charClass"
                        onChange={this.handleChange}
                        // onChange={this.props.fromChangeParent}
                        value={this.state.charClass}
                    />
                    <label htmlFor="charLvl">Level: </label>
                    <input
                        type="number"
                        id="charLvl"
                        name="charLvl"
                        min="1"
                        max="20"
                        onChange={this.handleChange}
                        // onChange={this.props.fromChangeParent}
                        value={this.state.charLvl}
                    />
                    <label htmlFor="charInventory">Inventory: </label>
                    <textarea 
                        name="charInventory" 
                        id="charInventory" 
                        onChange={this.handleChange} 
                        value={this.state.charInventory}
                    />
                    <label htmlFor="charJournal">Current Quest: </label>
                    <textarea
                        id="charJournal"
                        name="charJournal"
                        // onChange={this.props.fromChangeParent}
                        onChange={this.handleChange}
                        value={this.state.charJournal}
                    />
                    {/* <label htmlFor="imageUrlInput">Character Portrait URL:</label>
                    <input 
                        type="text"
                        name="imageUrlInput" 
                        id="imageUrlInput" 
                        // onChange={this.handleChange} 
                        onChange={this.props.fromChangeParent}
                        value={this.state.imageUrlInput}
                    /> */}
                    <ImgAdd 
                    fromImgParent={this.handleFormSubmit}/>
                    <img src={this.state.imgSrc} alt="" width="300px" />

                    <button className="submit" type="submit">Submit</button>
                </form>
            </div >
        )
    }
}

export default FormToggle;