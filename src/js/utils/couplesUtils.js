/**
 * Created by sokolov on 29.03.2016.
 */
// import _ from 'lodash';
// import {imagesCollection} from '../images/storage.js';

const CoupleCard = (id) => {
    
};

export const createCards = (rows, cols, theme) => {
    let size = rows * cols;
    if (size % 2 !== 0) {
        console.error("wrong size");
        return [];
    }
    debugger;

    let halfSize = size / 2;
    let array = _.range(halfSize);
  //  console.log(imagesCollection);

    return [];
};
