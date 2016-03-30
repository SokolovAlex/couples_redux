/**
 * Created by alexs_000 on 26.03.2016.
 */
import _ from 'lodash';
import {createCards} from "../utils/couplesUtils";

const couples = (state = {cards: [], theme: "tourism"}, action) => {
    switch (action.type) {
        case 'open_card':
            if (state.active) {
                if (state.active.key = action.card.key) {
                    action.card.opened = true;
                }
                state.active.open = false;
                state.active = null;
            } else {
                state.active = action.card;
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