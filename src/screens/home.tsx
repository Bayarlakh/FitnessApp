import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components'

export const HomeScreen: React.FC<any> = () => {

    return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Button onPress={() => {}}>
        Leaderboard
      </Button>
      <Button onPress={() => {}}>
        My Graph
      </Button>
      <Button onPress={() => {}}>
        Login/Signup
      </Button>
    </SafeAreaView>
  );
};
