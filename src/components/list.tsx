import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import _ from 'lodash';
import { Box } from './box';

export const ListItem: React.FC<ListItemType> = ({
    number,
    color,
    children
}) => {
    return (
        <Box flexDirection={'row'} width={'100%'}>
            <Text style={{color:color}}>
                {number}
            </Text>
            <Box width={20} />
            <Text style={{color:color}}>
                {children}
            </Text>
        </Box>
    );
};

type ListItemType = {
    number: string | number;
    color?: string;
    children: string;
}