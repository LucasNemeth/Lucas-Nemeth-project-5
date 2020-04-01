import React, { Component } from 'react';

class ImgAdd extends Component {
    constructor(){
        super();

        // this.state={
        //     showMenu: false,
        //     }
        // }
        // showMenu=()=>{}

        // showMenu(e) {
        //     e.preventDefault();
        
        //     this.setState({ 
        //         showMenu:true,
        //     })

    }
    render() {
        return (
            <div>
                <div className="imgMenu">
                    <button className="charPortrait"><img className="charPortrait"src="./assets/Screenshot_1.jpg" alt="Human fighter"></img></button>

                    <button className="charPortrait"> <img src="./assets/Screenshot_2.jpg" alt="Human Sorceress"/></button >

                    <button className="charPortrait"> <img src="./assets/Screenshot_3.jpg" alt="Elf Druid"/></button>

                    <button className="charPortrait"> <img src="./assets/Screenshot_4.jpg" alt="Elf Rogue"/></button>

                    <button className="charPortrait"> <img src="./assets/Screenshot_5.jpg" alt="Dwarf Paladin"/></button>

                    <button className="charPortrait"> <img src="./assets/Screenshot_6.jpg" alt="Dwarf Cleric"/></button>

                    <button className="charPortrait"> <img src="./assets/Screenshot_7.jpg" alt="Gnome Ranger"/></button>

                    <button className="charPortrait"> <img src="./assets/Screenshot_8.jpg" alt="Gnome Bard"/></button>

                    <button className="charPortrait"> <img src="./assets/Screenshot_9.jpg" alt="Half-Orc Barbarian"/></button>

                    <button className="charPortrait"> <img src="./assets/Screenshot_10.jpg" alt="Half-Orc Fighter"/></button>
                </div>
            </div>
        );
    }
}
export default ImgAdd;