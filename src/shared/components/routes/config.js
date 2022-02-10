/* eslint-disable import/no-unresolved */

import EnterScreen from '@/screens/unauthenticated/EnterScreen';
import HomepageScreen from '@/screens/unauthenticated/HomepageScreen';
import DetailScreen from '@/screens/unauthenticated/DetailScreen';
import MyteamScreen from '@/screens/unauthenticated/MyteamScreen';
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
    component: DetailScreen,
  },
  {
    path: '/team',
    component: MyteamScreen,
  },
];

export default routesConfig;
