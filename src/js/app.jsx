import { createStore, combineReducers } from 'redux';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CouplesGame from './couplesGame.jsx';
import reducer from './reducers';
import Menu from './menu.jsx';

let appStore = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <div className="site-wrapper-inner">

                <div className="cover-container">

                    <div className="masthead clearfix">
                        <div className="inner">
                            <h3 className="masthead-brand">Cover</h3>
                        </div>
                        <Menu store={appStore}/>
                    </div>

                    <CouplesGame store={appStore}/>
                    
                    <div className="mastfoot">
                        <div className="inner">
                            <p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

const renderApp = () => {
    console.log("state:", appStore.getState());
    render(<App/>, document.getElementById('root'));
};
renderApp();
appStore.subscribe(renderApp);