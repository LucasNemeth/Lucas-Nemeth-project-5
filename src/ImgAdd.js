import React, { Component } from 'react';

class ImgAdd extends Component {
    constructor(){
        super();

        // this.state={

        // }

        // handleImageChange = (e) => {
        //     // const imageToShow = this.state.imageUrlInput.filter(item => item.key === key)
        //     this.setState({
        //         imgFile: e.target.files[0],
        //         imgSrc: URL.createObjectURL(e.target.files[0]),
        //         // showImage:imageToShow
        //     });

        //     URL.revokeObjectURL(e.target.files[0]); //to avoid memory issues

        // }
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
                    <button type="button"
                        className="charPortrait"
                        onClick={this.handleImageChange}>
                        <img className="charPortrait"
                        src="https://i.ya-webdesign.com/images/human-fighter-png-3.png" 
                        alt="Human fighter" />
                    </button>

                    <button type="button" 
                    className="charPortrait"> 
                        <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/258/420/618/636271801914013762.png" 
                        alt="Human Sorceress"/>
                    </button >

                    <button type="button" 
                    className="charPortrait"> 
                        <img src="https://i.ya-webdesign.com/images/dd-ranger-png.png" 
                        alt="Elf Druid"/>
                    </button>

                    <button type="button" 
                    className="charPortrait"> 
                        <img src="https://i.pinimg.com/originals/3a/e9/70/3ae9709fd052af393ec3578aa81df3f7.png" alt="Elf Rogue"/>
                    </button>

                    <button type="button" 
                    className="charPortrait"> 
                        <img src="https://www.worldanvil.com/uploads/images/ecad6660fd836ce2a99396f0861f6f91.png" alt="Dwarf Paladin"/>
                    </button>

                    <button type="button" 
                    className="charPortrait"> 
                        <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png" 
                        alt="Dwarf Cleric"/>
                    </button>

                    <button type="button" 
                    className="charPortrait"> 
                        <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png" 
                        alt="Gnome Ranger"/>
                    </button>

                    <button type="button" 
                    className="charPortrait"> 
                        <img src="https://i.pinimg.com/originals/a4/b1/3c/a4b13cd2a3afa322f68ffc47f0faeb8c.png" alt="Gnome rogue"/>
                    </button>

                    <button type="button" 
                    className="charPortrait"> 
                        <img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/466/420/618/636274570630462055.png" 
                        alt="Half-Orc Barbarian"/>
                    </button>

                    <button type="button" 
                    className="charPortrait"> 
                        <img src="https://www.pngkit.com/png/full/104-1048127_half-orc-04-b-d-d-half-orc.png" alt="Half-Orc Fighter"/>
                    </button>
                </div>
            </div>
        );
    }
}
export default ImgAdd;