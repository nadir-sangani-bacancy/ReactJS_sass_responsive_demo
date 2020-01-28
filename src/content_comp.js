import React from 'react';
import './globalcss.scss';
import image from './asset/img_chania.jpg'

class Content_comp extends React.Component{
    render(){
        return(
        <div className="container">
            <div>
                <img src={image} alt="Flowers in Chania"/>
                <img src={image} alt="Flowers in Chania"/>
                <img src={image} alt="Flowers in Chania"/>
                <img src={image} alt="Flowers in Chania"/>
                <img src={image} alt="Flowers in Chania"/>
                <img src={image} alt="Flowers in Chania"/>
                <img src={image} alt="Flowers in Chania"/>
                <img src={image} alt="Flowers in Chania"/>
                <img src={image} alt="Flowers in Chania"/>
                <img src={image} alt="Flowers in Chania"/>
            </div>
        </div>
        )
    }
    
}
export default Content_comp;