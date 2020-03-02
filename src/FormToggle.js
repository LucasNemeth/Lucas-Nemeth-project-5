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

    deferred = (e) => this.props.fromPapa(e, this.handleFormSubmit)
    

    render() {
        return (
            < div >
                <form id="charForm" action="submit" onSubmit={this.handleFormSubmit}>

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
                    <label htmlFor="charJournal">Current Quest: </label>
                    <textarea
                        id="charJournal"
                        name="charJournal"
                        onChange={this.handleChange}
                        value={this.state.charJournal}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div >
        )
    }
}

export default FormToggle;