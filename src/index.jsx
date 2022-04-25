import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './Components/MainView/mainView';

//import statement to show that you need to bundle './index.scss'
import './index.scss';

//main component
class FlixFansApp extends React.Component{
    render(){
        return(
           <MainView/>
        );
    }
}
//finds the root of app
const container = document.getElementsByClassName('app-container')[0];

//tells react to rend app in the root DOM element
ReactDOM.render(React.createElement(FlixFansApp),container);