import React, { Component } from 'react';

//

class PrintDisplay extends Component {
    constructor(){
        super();
        this.state={
            isHidden:true,
            charObject:''
        }
    }
    toggleInfoHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    

    render() {
        const { key, name } = this.props.char[0];
        console.log(key, name)
        return (
            <div className="display">
                <ul className="displayList">
                    {/* <li><img src={this.state.imgUrlInput} alt="" /></li> */}
                    <li><h3>Name: {name.charName}</h3></li>
                    <li><h3>Class: {name.charClass}</h3></li>
                    <li><h3>Level: {name.charLvl}</h3></li>
                    <li><h3>Current Quest: {name.charJournal}</h3></li>
                    <li><h3>Equipment: {name.charInventory}</h3></li>
                    <button onClick={
                        ()=>{this.props.editCharacter(key)}
                    }>
                        Edit</button>

                </ul>
            </div>
        );
    }
}


export default PrintDisplay;

