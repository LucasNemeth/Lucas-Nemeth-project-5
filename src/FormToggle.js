import React, { Component } from 'react';

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
        this.setState({
            imgFile: e.target.files[0],
            imgSrc: URL.createObjectURL(e.target.files[0]),
        });
        
        URL.revokeObjectURL(e.target.files[0]); //to avoid memory issues
        
    }
    

    deferred = (e) => {this.props.fromPapa(e, this.props.handleFormSubmit)}
    

    render() {
        return (
            < div >
                <form id="charForm" action="submit" onSubmit={this.props.fromPapa}>

                    <label htmlFor="charName">Name: </label>
                    <input
                        type="text"
                        id="charName"
                        name="charName"
                        onChange={this.props.fromChangeParent}
                        value={this.state.charName}
                    />
                    <label htmlFor="charClass">Class: </label>
                    <input
                        type="text"
                        id="charClass"
                        name="charClass"
                        onChange={this.props.fromChangeParent}
                        value={this.state.charClass}
                    />
                    <label htmlFor="charLvl">Level: </label>
                    <input
                        type="text"
                        id="charLvl"
                        name="charLvl"
                        onChange={this.props.fromChangeParent}
                        value={this.state.charLvl}
                    />
                    <label htmlFor="charJournal">Current Quest: </label>
                    <textarea
                        id="charJournal"
                        name="charJournal"
                        onChange={this.props.fromChangeParent}
                        value={this.state.charJournal}
                    />
                    <label htmlFor="imageUrlInput">Character Portrait URL:</label>
                    <input 
                        type="text"
                        name="imageUrlInput" 
                        id="imageUrlInput" 
                        // onChange={this.handleImageChange} 
                        onChange={this.props.fromChangeParent}
                        value={this.state.imageUrlInput}
                    />
                    <img src={this.state.imgSrc} alt="" width="300px" />

                    <button type="submit">Submit</button>
                </form>
            </div >
        )
    }
}

export default FormToggle;