import React from 'react';
// import { RootNavigationContainer } from './navigation';
// import { AuthUserProvider } from '../src/provider/auth';
// import { ApolloClientProvider } from './graphql';
import { HomeScreen, LeaderboardScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from './screens/login';

const App = () => {
    interface NavigationPayload<T> {
        props:T
    }
    
    type NavigatorParamList = {
        'Home': NavigationPayload<any>;
        'Leaderboard': NavigationPayload<any>;
        'My Graph': NavigationPayload<any>;
        'Login': NavigationPayload<any>;
    }
    
    const RootStack = createStackNavigator<NavigatorParamList>();

    return (
        // <AuthUserProvider>
            <NavigationContainer>
                <RootStack.Navigator initialRouteName={'Home'}>
                    <RootStack.Screen 
                        name={'Home'} 
                        component={HomeScreen}
                        options={{headerShown: false}}
                    />
                    <RootStack.Screen
                        name={'Leaderboard'}
                        component={LeaderboardScreen}
                    />
                    <RootStack.Screen
                        name={'My Graph'}
                        component={LeaderboardScreen}
                    />
                    <RootStack.Screen
                        name={'Login'}
                        component={LoginScreen}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        // </AuthUserProvider>
    );
};

export default App;
