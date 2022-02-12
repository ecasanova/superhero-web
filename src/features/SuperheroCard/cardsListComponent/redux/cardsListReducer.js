import produce from 'immer';

import {loadSuperheroes} from './cardsListActions';

const initialState = {
  superheroes: [],
};

export default produce((draft, {type, payload}) => {
  switch (type) {
    case loadSuperheroes.REQUEST:
      draft.superheroes = [];
      draft.loading = true;
      break;
    case loadSuperheroes.SUCCESS:
      draft.superheroes = [...payload];
      break;
    case loadSuperheroes.FAILURE:
      draft.superheroes = [];
      draft.error = payload;
      break;
    case loadSuperheroes.FULFILL:
      draft.loading = false;
      break;
    // no default
  }
}, initialState);
