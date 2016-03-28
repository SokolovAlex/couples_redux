/**
 * Created by alexs_000 on 21.03.2016.
 */
import React, { Component } from 'react';
import { selectMenu } from './actions';

export default class MenuLink extends Component {
    render() {
        let name = this.props.name;
        this.store = this.props.store;
        this.screenName = this.props.screenName;
        let active = this.props.currentPage === name;
        let onMenuClick = this.onClick.bind(this, name);
        return (
            <li
                onClick={onMenuClick}
                className={active ? 'active' : null}>
                <a href="#">{this.screenName}</a>
            </li>
        );
    }
    onClick(menu) {
        let store = this.store;
        store.dispatch(selectMenu(menu));
    }
}

export default class Menu extends Component {
    render() {
        let store = this.props.store;
        let page = store.getState().menu;
        return (
            <ul className="nav masthead-nav">
                <MenuLink
                    name = "home"
                    screenName = "Home"
                    store = {store}
                    currentPage = {page}
                />
                <MenuLink
                    name = "couples"
                    screenName = "Couples"
                    store = {store}
                    currentPage = {page}
                />
                <MenuLink
                    name = "about"
                    screenName = "About"
                    store = {store}
                    currentPage = {page}
                />
            </ul>
        );
    }
}