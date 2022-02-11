import produce from 'immer';

import {loadSuperheroes} from './cardsListActions';

const initialState = {
  superheroes: {},
  total: 0,
};

export default produce((draft, {type, payload}) => {
  switch (type) {
    case loadSuperheroes.REQUEST:
      draft.superheroes = [];
      draft.loading = true;
      draft.total = 0;
      break;
    case loadSuperheroes.SUCCESS:
      draft.superheroes = [...payload];
      draft.total = payload.length;
      break;
    case loadSuperheroes.FAILURE:
      draft.superheroes = [];
      draft.error = payload;
      draft.total = 0;
      break;
    case loadSuperheroes.FULFILL:
      draft.loading = false;
      draft.total = 0;
      break;
    // no default
  }
}, initialState);
