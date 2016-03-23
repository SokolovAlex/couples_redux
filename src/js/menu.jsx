/**
 * Created by alexs_000 on 21.03.2016.
 */
import React, { Component } from 'react';
import { selectMenu } from './actions';

let store;

export default class Menu extends Component {
    render() {
        store = this.props.store;
        let page = store.getState().menu;
        return (
            <ul className="nav masthead-nav">
                <li
                    onClick={this.onClick}
                    name="home"
                    className={page === 'home' ? 'active' : null}><a href="#">Home</a></li>
                <li
                    onClick={this.onClick}
                    name="couples"
                    className={page === 'couples' ? 'active' : null}><a href="#">Couples</a></li>
                <li
                    onClick={this.onClick}
                    name="about"
                    className={page === 'about' ? 'active' : null}><a href="#">About</a></li>
            </ul>
        );
    }
    onClick(e) {
        var name = e.currentTarget.getAttribute("name");
        store.dispatch(selectMenu(name));
    }
}