/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import { 
  Button, 
  Spacing, 
  Box, 
} from './src/components'

 const App = () => {
   return (
      <SafeAreaView>
        <Box justifyContent={'space-between'} flexDirection={'column'}>
          <Box flexDirection={'row'} justifyContent={'space-between'}>
            <Button width={120} color={'gray'} onPress={() => {}}>
              <Text style={{color: '#FFFFFF'}}>
                Leaderboard
              </Text>
            </Button>
            <Button width={120} color={'gray'} onPress={() => {}}>
              <Text style={{color: '#FFFFFF'}}>
                My Graph
              </Text>
            </Button>
          </Box>
          <Button width={120} color={'gray'} onPress={() => {}}>
            <Text style={{color: '#FFFFFF'}}>
              Login/Signup
            </Text>
          </Button>

        </Box>
      </SafeAreaView>
   );
 };

 export default App;
