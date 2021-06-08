import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Box, Border, Shadow } from '../components';

const statusOpacity = {
  default: 1,
  disabled: 0.5,
  active: 0.7,
};

export const Button: React.FC<ButtonType> = ({
  onPress,
  status = 'default',
  width,
  color,
  height,
  children,
}) => {
  return (
    <Box
      opacity={statusOpacity[status]}
      width={width ? width : 'auto'}
      height={height}
      alignSelf={'flex-start'}
    >
      <TouchableOpacity
        onPress={() => onPress()}
        disabled={status === 'disabled'}
      >
        <Border
          radius={4}
          color={color}
        >
          <Box
            color={color}
            height={'100%'}
          >
            <Shadow
              color={'black'}
              radius={0}
              opacity={0.15}
              h={4}
              w={0}
            >
              <Box
                width={'100%'}
                height={height}
                color={color}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Box
                  justifyContent={'center'}
                  alignItems={'center'}
                  alignSelf={'stretch'}
                >
                  {children}
                </Box>
              </Box>
            </Shadow>
          </Box>
        </Border>
      </TouchableOpacity>
    </Box>
  );
};

type ButtonType = {
  status?: 'disabled' | 'active' | 'default';
  size?: 'l' | 's';
  width?: number | string;
  height?: number | string;
  color?: string;
  onPress: Function;
  children?: any;
};
