import React from 'react';
import { View, Text } from 'react-native';
import Card from '../card';
import { data } from '../../constants';

const index = () => {
    return (
        <View>
            {data.map(( item, index ) => (
                <Card key={index} {...item}/>
            ))}
        </View>
    )
}

export default index
