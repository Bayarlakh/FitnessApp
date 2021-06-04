import React from 'react';
import { View, StyleSheet } from 'react-native';
import _ from 'lodash';

export const Shadow: React.FC<ShadowType> = ({
  color,
  grow = 0,
  opacity = 0.1,
  radius = 5,
  h = 0,
  w = 0,
  children,
}) => {
  const styles = StyleSheet.create({
    boxshadow: {
      flexGrow: grow,
      shadowOpacity: opacity,
      shadowRadius: radius,
      shadowColor: color,
      shadowOffset: { height: h, width: w },
      elevation: 40,
    },
  });

  return <View style={[styles.boxshadow]}>{children}</View>;
};

type ShadowType = {
  color?: string;
  grow?: number;
  h?: number;
  w?: number;
  radius?: number;
  opacity?: number;
  children?: JSX.Element | JSX.Element[] | string;
};
