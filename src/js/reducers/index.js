/**
 * Created by alexs_000 on 26.03.2016.
 */

import { combineReducers } from 'redux';
import menu from './menu';
import couples from './couples';

const appReducer = combineReducers({
    couples,
    menu
});

export default appReducer