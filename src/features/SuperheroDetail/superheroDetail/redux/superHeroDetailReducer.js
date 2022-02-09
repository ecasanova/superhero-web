import produce from 'immer';

import {loadSuperheroDetail} from './superHeroDetailActions';

const initialState = {
  ssuperheroeDetail: {},
};

export default produce((draft, {type, payload}) => {
  switch (type) {
    case loadSuperheroDetail.REQUEST:
      draft.superheroeDetail = {};
      draft.loading = true;
      break;
    case loadSuperheroDetail.SUCCESS:
      draft.superheroeDetail = payload;
      break;
    case loadSuperheroDetail.FAILURE:
      draft.superheroeDetail = {};
      draft.error = payload;
      break;
    case loadSuperheroDetail.FULFILL:
      draft.loading = false;
      break;
    // no default
  }
}, initialState);
