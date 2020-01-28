import React from 'react';
//import './globalcss.scss';

class Header_comp extends React.Component{

    render(){
    return(
        <div>
            <header className="header1"> 
                <ul>
                    <li><a className="active" >Home</a></li>
                    <li><a >News</a></li >
                    <li><a >Contact</a></li>
                    <li><a >About</a></li>
                </ul>
            </header> 
            
        </div>
    )
}
}
export default Header_comp;