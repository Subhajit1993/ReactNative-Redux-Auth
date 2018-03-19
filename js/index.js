
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleProvider } from 'native-base';
import App from './App';
import configureStore from './configureStore';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import SplashScreen from 'react-native-smart-splash-screen';

class Root extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({isLoading: false})),
        };
    }

    componentDidMount() {

    }
    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Provider store={this.state.store}>
                    <App/>
                </Provider>
            </StyleProvider>
        );
    }
}

export default Root;
