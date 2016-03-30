/**
 * Created by alexs_000 on 21.03.2016.
 */
import React, { Component } from 'react';
import { openCard } from './actions';

export default class CouplesCard extends Component {
    render() {
        let card = this.props.card;
        let theme = this.props.theme;

        const imagePath = (name) => {
            return `./images/${theme}/${name}.jpg`;
        };

        const cardClick = this.onClick.bind(this, card);

        let background = `background-image: ${imagePath('back')}`;

        return (
            <div className='card' key={card.key} onClick={cardClick}>
                <div className='back' style={background}>
                </div>

                <div className='forward'>
                    <img alt="" src={imagePath(card.key)} />
                </div>
            </div>
        );
    }
    onClick(card, e) {
        console.log("card", card, e);
    }
}

export default class CouplesGame extends Component {
    render() {
        let store = this.props.store;
        let state = store.getState();
        let page = state.menu.page;

        if (page !== "couples") {
            return false;
        }
        
        let cardRows = state.couples.cards;
        let theme = state.couples.theme;
        let className = `couples ${theme}`;
        
        return (
            <div className="inner cover">
                <div className={className}>
                    {
                        cardRows.map(row =>
                            <div className="row">
                                {
                                    row.map(card =>
                                        <CouplesCard
                                            card={card}
                                            theme={theme}
                                        />
                                    )
                                }
                            </div>
                    )}
                </div>
            </div>
        );
    }
}
