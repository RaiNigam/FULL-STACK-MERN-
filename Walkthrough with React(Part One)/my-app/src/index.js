import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './2nd Assignment/Button';
import Header from './3rd Assignment/Header';
import List from './4th Assignment/List';
const root = ReactDOM.createRoot(document.getElementById('root'));
const listItems=['Pen','Sharpener','Eraser','Copy'];
root.render(
  <React.StrictMode>
    <App />
    <Button text="Click Me!!!" onClick={()=>{
      console.log("Button Clicked")}}/>
    <Header title="Register to have access"/>
    <List items={listItems}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
