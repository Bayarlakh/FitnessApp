import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Box, Spacing, Border, Shadow } from '../components';

const statusOpacity = {
  default: 1,
  disabled: 0.5,
  active: 0.7,
};

export const Button: React.FC<ButtonType> = ({
  onPress,
  status = 'default',
  size = 'l',
  category = 'fill',
  width,
  color,
  children,
}) => {
  return (
    <Box
      opacity={statusOpacity[status]}
      width={width ? width : 'auto'}
      height={size === 's' ? 42 : 48}
      alignSelf={'flex-start'}
    >
      <TouchableOpacity
        onPress={() => onPress()}
        disabled={status === 'disabled'}
      >
        <Border
          radius={4}
          color={color}
          lineWidth={category === 'ghost' ? 1 : 0}
        >
          <Box
            color={color}
            height={'100%'}
          >
            <Shadow
              color={'black'}
              radius={0}
              opacity={0.15}
              h={category === 'fill' ? 4 : 0}
              w={0}
            >
              <Box
                width={'100%'}
                height={size === 's' ? 38 : 44}
                color={color}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Spacing ph={category === 'text' ? 0 : 4}>
                  <Box
                    justifyContent={'center'}
                    alignItems={'center'}
                    alignSelf={'stretch'}
                  >
                    {children}
                  </Box>
                </Spacing>
              </Box>
            </Shadow>
          </Box>
        </Border>
      </TouchableOpacity>
    </Box>
  );
};

type ButtonType = {
  category?: 'fill' | 'ghost' | 'text';
  status?: 'disabled' | 'active' | 'default';
  size?: 'l' | 's';
  width?: number | string;
  height?: number | string;
  color?: string;
  onPress: Function;
  children?: any;
};
