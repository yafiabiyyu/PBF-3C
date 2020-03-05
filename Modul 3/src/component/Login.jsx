import React from 'react';
import './Login.css';

class Login extends React.Component{
    render(){
        return(
            <div>
                <h1 className="judul">Form Login</h1>
                <div className="login-card">
                    <h1>Tugas Pertemuan Ketiga</h1>
                    <form action="">
                        <label htmlFor="">Username</label>
                        <input type="text" name="" placeholder="Masukan Username" id=""/>
                        <label htmlFor="">Password</label>
                        <input type="text" name="" placeholder="Masukan Password" id=""/>
                        <input type="submit" name="login" class="login login-submit" value="login"></input>
                    </form>
                    <div className="login-help">
                    <label htmlFor=""><input type="checkbox" name="" id=""/>Remember me</label>
                    <div>
                        <input type="submit" className="batal login" value="Cancle"/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;