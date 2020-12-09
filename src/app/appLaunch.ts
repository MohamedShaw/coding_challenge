import { AppNavigation } from 'navigation';
import { checkUpdate } from 'utils';
import { rootStore } from 'store';



export const onAppLaunch = () => {
  // console.log("app");

  AppNavigation.setRootScreen('home');



} 