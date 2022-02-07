import {createRoutine} from 'redux-saga-routines';

import {LOAD_LIST_SUPERHEROES} from './cardsListTypes';

export const loadSuperheroes = createRoutine(LOAD_LIST_SUPERHEROES);
