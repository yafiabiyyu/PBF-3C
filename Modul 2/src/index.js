import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import gambar from './biyyu.jpg';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


const Hello = () => {
    return(
        <div class="card">
            <img src={gambar} alt="John" class="test"></img>
            <h1>Abiyyu Yafi</h1>
            <p class="title">Python Dev</p>
            <p>Politeknik Negeri malang</p>
        </div>
        
        
    );
}

ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
