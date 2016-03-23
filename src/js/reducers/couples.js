/**
 * Created by alexs_000 on 26.03.2016.
 */
import _ from 'lodash';

const openCard = (state, action) => {
    switch (action.type) {
        case 'open_card':

            if (state.active) {
                if (state.active.key = action.card.key) {

                    action.card.opened = true;
                }
                state.active.open = false;
                state.active = null;
            } else {
                state.active = action.card
            }
            return state;
        default:
            return state;
    }
};

const checkCard = (state, action) => {
    switch (action.type) {
        case 'open_card':

            if (state.active) {
                if (state.active.key = action.card.key) {

                    action.card.opened = true;
                }
                state.active.open = false;
                state.active = null;
            } else {
                state.active = action.card
            }
            return state;
        default:
            return state;
    }
};

export default openCard;