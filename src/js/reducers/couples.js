/**
 * Created by alexs_000 on 26.03.2016.
 */
import _ from 'lodash';
import {createCards} from "../utils/couplesUtils";

const couples = (state = {cards: [], theme: "tourism"}, action) => {
    switch (action.type) {
        case 'open_card':

            console.log("open");
            console.log(state, action);

            debugger;
            
            let card = action.card;
            let stateCard = state.cards[card.r] && state.cards[card.r][card.c];
            if (stateCard) {
                stateCard.opened = !stateCard.opened;
            }

            return state;
        case 'menu':

            if (action.name === 'couples') {
                state.theme = "tourism";
                state.cards = createCards(2, 4, state.theme);
            }
            return state;
        default:
            return state;
    }
};

export default couples;