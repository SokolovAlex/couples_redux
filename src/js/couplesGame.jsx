/**
 * Created by alexs_000 on 21.03.2016.
 */
import React, { Component } from 'react';
import { openCard } from './actions';

export default class CouplesCard extends Component {
    render() {
        return (
            <div className='card'>
                <div className='back'>
                    <img alt="" src='/back.jpeg' />
                </div>

                <div className='forward'>
                    <img alt="" src="/1.jpeg" />
                </div>
            </div>
        );
    }
}

export default class CouplesGame extends Component {
    render() {
        let store = this.props.store;
        let page = store.getState().menu.page;

        if (page !== "couples") {
            return false;
        }

        return (
            <div className="inner cover">
                <div className="couples">
                    <CouplesCard/>
                </div>
            </div>
        );
    }
}
