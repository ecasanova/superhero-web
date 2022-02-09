/* eslint-disable import/no-unresolved */

import EnterScreen from '@/screens/unauthenticated/EnterScreen';
import HomepageScreen from '@/screens/unauthenticated/HomepageScreen';
import DetailScreen from '@/screens/unauthenticated/DetailScreen';
import MyteamScreen from '@/screens/unauthenticated/MyteamScreen';
import {loadSuperheroeDetails} from '@/features/SuperheroDetail/superheroDetail/redux/superHeroDetailActions';
import LoadinComponent from '@/shared/components/Loading';
const routesConfig = [
  {
    path: '/',
    component: EnterScreen,
    exact: true,
  },
  {
    path: '/home',
    component: HomepageScreen,
    exact: true,
    loading: LoadinComponent,
  },
  {
    path: '/details/:id',
    actions: [loadSuperheroeDetails],
    component: DetailScreen,
  },
  {
    path: '/my-team',
    component: MyteamScreen,
  },
];

export default routesConfig;
