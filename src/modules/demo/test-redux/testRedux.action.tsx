import * as constants from './testRedux.constant';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    /* tslint:disable-next-line */
    console.log('action.incrementEnthusiasm');
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    /* tslint:disable-next-line */
    console.log('action.decrementEnthusiasm');
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}
