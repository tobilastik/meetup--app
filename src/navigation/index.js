//Navigations
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screens
import Register from '../screens/Register';
import Introduction from '../screens/Introduction';
import Login from '../screens/Login';
import Congratulations from '../screens/Congratulations';
import Home from '../screens/Home';
import Authloading from '../screens/Authloading';

//Main App
const AppStack = createStackNavigator (
  {
    Home,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

//Authentication navigation
const AuthStack = createStackNavigator (
  {
    Login,
    Register,
    Congratulations,
    Introduction,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer (
  createSwitchNavigator (
    {
      AuthLoading: Authloading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
