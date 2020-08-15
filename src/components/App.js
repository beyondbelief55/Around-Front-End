import React from 'react';
import '../styles/App.css';
import TopBar from './TopBar';
import Main from './Main';
import { TOKEN_KEY } from '../constants'


class App extends React.Component{
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
    }

    render (){
        return (
            <div className="App">
                <TopBar handleLogout={this.handleLogout}
                        isLoggedIn={this.state.isLoggedIn}
                />
                <Main
                    handleLoginSucceed={this.handleLoginSucceed}
                    isLoggedIn = {this.state.isLoggedIn}
                />
            </div>
        );

    }

    handleLoginSucceed = (token) => {
        localStorage.setItem(TOKEN_KEY, token)
        this.setState({ isLoggedIn: true });
    }

    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({ isLoggedIn: false });
    }


}

export default App;
