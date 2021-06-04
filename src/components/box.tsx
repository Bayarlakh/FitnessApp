import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Box: React.FC<BoxType> = (props) => {
  const {
    flex = 0,
    height,
    width,
    overflow,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignSelf,
    display,
    position,
    children,
    top,
    bottom,
    left,
    right,
    zIndex,
    opacity,
    color,
  } = props;
  const styles = StyleSheet.create({
    container: {
      flex,
      width,
      height,
      overflow,
    },
    flexBox: {
      display: 'flex',
      flexDirection: flexDirection || 'column',
      flexWrap: flexWrap || 'nowrap',
      justifyContent: justifyContent || 'flex-start',
      alignItems: alignItems || 'stretch',
      alignSelf: alignSelf,
    },
    position: {
      position: position || 'relative',
      top,
      bottom,
      left,
      right,
      zIndex,
    },
    display: {
      display,
    },
    background: {
      opacity: opacity,
      backgroundColor: color,
    },
  });

  return (
    <View
      style={[
        styles.container,
        styles.flexBox,
        styles.position,
        styles.display,
        styles.background,
      ]}
    >
      {children}
    </View>
  );
};

type BoxType = {
  flex?: number;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignSelf?: 'stretch' | 'flex-start' | 'flex-end' | 'center';
  position?: 'absolute' | 'relative';
  display?: 'flex' | 'none';
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  zIndex?: number;
  opacity?: number;
  width?: string | number;
  height?: string | number;
  overflow?: 'hidden' | 'scroll' | 'visible';
  color?: string;
  children?: JSX.Element | JSX.Element[] | string | any;
};
