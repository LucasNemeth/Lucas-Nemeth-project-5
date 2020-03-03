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
        const { name } = this.props.char[0];
        console.log(name)
        return (
            <div className="display">
                <ul>
                    <li><img src={name.imgUrlInput} alt="" /></li>
                    <li><h3>Name: {name.charName}</h3></li>
                    <li><h3>Class: {name.charClass}</h3></li>
                    <li><h3>Level: {name.charLvl}</h3></li>
                    <li><h3>Current Quest: {name.charJournal}</h3></li>
                </ul>
            </div>
        );
    }
}


export default PrintDisplay;

//we'll toggle this. have it display nothing by default until a click of createdChar button.

//on click we'll need to populate this with the setstate of whatever info within the  button that was clicked