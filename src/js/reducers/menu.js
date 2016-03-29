/**
 * Created by alexs_000 on 26.03.2016.
 */
import {createCards} from "../utils/couplesUtils";

const menu = (state = { page: 'home' }, action) => {
    switch (action.type) {
        case 'menu':
            state.page = action.name;

            if (state.page === 'couples') {
                createCards.bind(this, 2, 2);
            }

            break;
    }
    return state;
};

export default menu;