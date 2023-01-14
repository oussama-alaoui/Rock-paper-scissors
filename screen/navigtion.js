import { createStackNavigator } from 'react-navigation';

import Welcome from './welcome';
import Play from './play';

const Navigation = createStackNavigator({
    Welcome: { screen: Welcome },
    Play: { screen: Play },
});

export default Navigation;