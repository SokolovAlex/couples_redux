/**
 * Created by sokolov on 29.03.2016.
 */
import _ from 'lodash';
import imagesCollection from '../../images/storage.json';

const CoupleCard = (id, key) => {
    return {
        id: id,
        key: key
    };
};

export const createCards = (rows, cols, theme = 'tourism') => {
    let size = rows * cols;
    if (size % 2 !== 0) {
        console.error("wrong size");
        return [];
    }

    let imagesShuffled = _.shuffle(imagesCollection[theme]);
    
    let halfSize = size / 2;
    let images = imagesShuffled;
    let array = _.range(halfSize);
    let cards_half = _.map(array, id => new CoupleCard(id, images[id]));
    let cards = _.map(_.range(rows), () => []);
    let r = 0, c = 0;

    return _.chain(cards_half.concat(cards_half))
        .shuffle()
        .reduce((memo, card) => {
            if (c >= cols) {
                c = 0;
                r++;
            }
            memo[r].push(card);
            c++;
            return memo;
        }, cards
    ).value();
};
