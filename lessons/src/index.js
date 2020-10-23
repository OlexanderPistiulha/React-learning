import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


const Header = () => {
    return <h2>hello hello</h2>
}

const Field = () => {
    return <input type="text" placeholder="type here" />
}

const Btn = ()=> {
    const text = "log in";
    const  loged = true;
    return <button>{loged ? "enter your log in" : text}</button>}

const App = ()=> {
    return(
        <div>
            <Header/>
            <Field/>
            <Btn/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
