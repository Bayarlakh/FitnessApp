import React from 'react';
import {
  Text,
  ScrollView
} from 'react-native';
import { 
  Button, 
  Spacing, 
  Box, 
  ListItem,
} from '../components';
import { useNavigation } from '@react-navigation/native';

export const LeaderboardScreen = () => {
    const navigation = useNavigation();
    return (
        <Spacing m={'5%'}>
            <Box justifyContent={'space-between'} flexDirection={'column'}>
                <Box flexDirection={'row'} justifyContent={'space-between'}>
                    <Button width={120} color={'gray'} status={'disabled'} onPress={() => navigation.navigate('Leaderboard')}>
                        <Text style={{color: '#7BF978'}}>
                            Leaderboard
                        </Text>
                    </Button>
                    <Button width={120} color={'gray'} onPress={() => navigation.navigate('My Graph')}>
                        <Text style={{color: '#FFFFFF'}}>
                            My Graph
                        </Text>
                    </Button>
                </Box>
                <ScrollView>
                    <Spacing ml={'15%'} mt={'20%'}>
                        <Box justifyContent={'space-between'} height={'70%'}>
                        <ListItem number={1} color={'black'}>Bay</ListItem>
                        <ListItem number={2} color={'black'}>Bay</ListItem>
                        <ListItem number={3} color={'black'}>Bay</ListItem>
                        <ListItem number={4} color={'black'}>Bay</ListItem>
                        <ListItem number={100} color={'black'}>You</ListItem>
                        </Box>
                    </Spacing>
                </ScrollView>
                <Spacing mt={'74%'}>
                    <Box>
                        <Button width={120} color={'gray'} onPress={() => navigation.navigate('Login')}>
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