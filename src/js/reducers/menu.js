/**
 * Created by alexs_000 on 26.03.2016.
 */
const menu = (state = { page: 'home' }, action) => {
    switch (action.type) {
        case 'menu':
            state.page = action.name;
            break;
    }
    return state;
};

export default menu;