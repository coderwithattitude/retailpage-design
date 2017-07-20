import React, { Component } from 'react';
import {Image, CLoudinaryContext, Transformation} from 'cloudinary-react';
import { SketchPicker } from 'react-color';

import './App.css';
const ImageTransformations = ({width, rgb, selectedShirt, text}) =>{
    return (
        <Image publicId={selectedShirt.main+'.jpg'}>
        <Transformation width={width} crop="scale" />
        <Transformation effect={'red:'+((-1+rgb.r/255)*100).toFixed(0)}/>
            <Transformation effect={'blue:'+((-1+rgb.r/255)*100).toFixed(0)}/>
            <Transformation effect={'green:'+((-1+rgb.r/255)*100).toFixed(0)}/>
            <Transformation underlay={selectedShirt.underlay} flags="relative" width="1.0"/>
            <Transformation overlay={selectedShirt.underlay} flags="relative" width="1.0"/>
        </Image>
    );
};
class App extends Component {

    constructor(props){
        super(props);
        const defaultShirt = {id: 1, main: 'shirt_only'};
        this.state = {
                shirts: [
                    defaultShirt,
                    {id: 2, main 'laying-shirt'},
                    {id: 3, main: 'hanging_t-shirt'}
                ],
            selectedShirt: defaultShirt,
        };
    }

    handleColorChange(color){
        this.setState({ background: color}, _ => this.forceUpdate());
    }
    selectShirt(thumb){
        this.setState({selectedShirt: thumb}, _ => this.forceUpdate())
    }
  render() {
    return (
      <div className="App">
       <CloudninacryContext cloudName="">
           <div id="imageDemoContainer">
               <div id="mainImage">
                   <ImageTransformations
                   width="600"
                   rgb={rgb}
                   selectedShirt={this.state.selectedShirt}
                   text={this.state.text}/>
               </div>
               <div id="imageThumbs">
                   <ul id="thumbs">
                       {this.state.shirts.map(thumb => {
                           return (
                               <li className={thumb.main === this.state.selectedShirt.main ? 'active': ''} onClick={this.selectShirt.bind(this, thumb)} key={thumb.id}>
                                   {/*<Image publicId={thumb.main}>*/}
                                   {/*<Transformation width="75" crop="scale" />*/}
                                   {/*</Image>*/}
                                   <ImageTransformations
                                   width="75"
                                   rgb={rgb}
                                   selectedShirt={thumb}
                                   text{' '}/>
                               </li>
                           )
                       })}
                   </ul>
               </div>
           </div>
       </CloudninacryContext>
      </div>
    );
  }
}

export default App;
