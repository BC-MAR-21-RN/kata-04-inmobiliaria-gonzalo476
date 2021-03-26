import React from 'react';
import { View, Text, Image } from 'react-native';

import { icons } from '../../constants';
import { styles } from './styles';

const rating = ({ rating }) => {
    return (
        <View style={styles.ratingContainer}>
            <Image source={icons.star} style={styles.ratingIcon} resizeMode='contain'/>
            <Text style={styles.ratingText}>{ rating }</Text>
        </View>
    )
}

export default rating
