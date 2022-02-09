import {createRoutine} from 'redux-saga-routines';

import {LOAD_SUPERHERO_DETAIL} from './superHeroDetailTypes';

export const loadSuperheroeDetails = createRoutine(LOAD_SUPERHERO_DETAIL);
