import React from 'react';
import {
  Text,
} from 'react-native';
import { 
  Button, 
  Spacing, 
  Box, 
} from '../components';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Spacing m={'5%'}>
      <Box justifyContent={'space-between'} flexDirection={'column'}>
        <Box flexDirection={'row'} justifyContent={'space-between'}>
            <Button width={120} color={'gray'} onPress={() => navigation.navigate('Leaderboard')}>
                <Text style={{color: '#FFFFFF'}}>
                Leaderboard
                </Text>
            </Button>
            <Button width={120} color={'gray'} onPress={() => navigation.navigate('My Graph')}>
            <Text style={{color: '#FFFFFF'}}>
              My Graph
            </Text>
          </Button>
        </Box>
        <Spacing mt={'73%'} ml={'35%'}>
          <Box alignItems={'center'}>
            <Button onPress={() => {}} color='gray'>
              <Text style={{color: '#FFFFFF'}}>
                Add workout
              </Text>
            </Button>
          </Box>
        </Spacing>
        <Spacing mt={'74%'}>
          <Box>
            <Button width={120} color={'gray'} onPress={() => {}}>
              <Text style={{color: '#FFFFFF'}}>
                Login/Signup
              </Text>
            </Button>
          </Box>
        </Spacing>
      </Box>
    </Spacing>
  );
};