import { Screen } from '../navigation'
import { Intro } from './Intro/Intro';

import { createScreen } from '../navigation';
import { Home } from './home/Home';
import { CharacterDetails } from './characterDetails/CharacterDetails';

export const screens: Screen[] = [
  { name: "intro", component: Intro },

  { name: "home", component: Home },
  { name: "characterDetails", component: CharacterDetails },


];


//// register fun
export const registerScreens = () => {
  screens.forEach((screen) => createScreen(screen));
};
