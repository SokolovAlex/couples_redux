/**
 * Created by alexs_000 on 26.03.2016.
 */
import {createCards} from "../utils/couplesUtils";

const menu = (state = { page: 'home', cards: [] }, action) => {
    switch (action.type) {
        case 'menu':
            state.page = action.name;

            if (state.page === 'couples') {
                state.cards = createCards(2, 4);

                debugger;
            } else {

            }

            break;
    }
    return state;
};

export default menu;