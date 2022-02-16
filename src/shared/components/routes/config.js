/* eslint-disable import/no-unresolved */

import EnterScreen from '@/screens/unauthenticated/EnterScreen';
import HomepageScreen from '@/screens/unauthenticated/HomepageScreen';
import DetailScreen from '@/screens/unauthenticated/DetailScreen';
import MyteamScreen from '@/screens/unauthenticated/MyteamScreen';
import LoadingComponent from '@/shared/components/Loading';
import NotFound from '@/shared/components/NotFound';
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
    loading: LoadingComponent,
  },
  {
    path: '/details/:id/:name',
    component: DetailScreen,
  },
  {
    path: '/team',
    component: MyteamScreen,
  },
  {
    path: '',
    component: NotFound,
  },
];

export default routesConfig;
