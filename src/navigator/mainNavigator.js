import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile65994Navigator from '../features/UserProfile65994/navigator';
import Tutorial65993Navigator from '../features/Tutorial65993/navigator';
import NotificationList65965Navigator from '../features/NotificationList65965/navigator';
import Settings65964Navigator from '../features/Settings65964/navigator';
import Settings65956Navigator from '../features/Settings65956/navigator';
import UserProfile65954Navigator from '../features/UserProfile65954/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile65994: { screen: UserProfile65994Navigator },
Tutorial65993: { screen: Tutorial65993Navigator },
NotificationList65965: { screen: NotificationList65965Navigator },
Settings65964: { screen: Settings65964Navigator },
Settings65956: { screen: Settings65956Navigator },
UserProfile65954: { screen: UserProfile65954Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
