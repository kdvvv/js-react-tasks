import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
    {
        id: 1,
        name: 'White',
        className: 'light',
    },
    {
        id: 2,
        name: 'Black',
        className: 'dark',
    },
    {
        id: 3,
        name: 'Blue',
        className: 'dark-blue',
    },
];

class App extends React.Component {
    // BEGIN (write your solution here)
    constructor(props) {
        super(props);
        this.state = {
            theme: themes[0]
        }

        this.setTheme = this.setTheme.bind(this);
    }

    setTheme(theme) {
        this.setState({
            theme: theme
        })
    }


    render() {
        let setTheme = this.setTheme;
        let {theme} = this.state;

        return (
            <ThemeContext.Provider value={{themes, theme, setTheme}}>
                <div className="App">
                    <ThemeSwitcher/>
                    <Tabs defaultActiveKey="home">
                        <Tab eventKey="home" title="Home">
                            <Home/>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <Profile/>
                        </Tab>
                    </Tabs>
                </div>
            </ThemeContext.Provider>
        );
    }

    // END
}

export default App;
