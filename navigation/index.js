import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Register from '../src/screens/Register';
import Introduction from '../src/screens/Introduction';
import Login from '../src/screens/Login';
import Congratulations from '../src/screens/Congratulations';
import Home from '../src/screens/Home';
import Authloading from '../src/screens/Authloading';

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
