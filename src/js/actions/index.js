/**
 * Created by alexs_000 on 26.03.2016.
 */

export const startGame = (game) => {
    return {
        type: 'start_game',
        game: game
    };
};

export const endGame = () => {
    return {
        type: 'home'
    };
};

export const selectMenu = (name) => {
    return {
        type: 'menu',
        name
    };
};

export const openCard = (card) => {
    return {
        type: 'open_card',
        card
    };
};

export const checkAnswer = () => {
    return {
        type: 'check_answer'
    };
};

