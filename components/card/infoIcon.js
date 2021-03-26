import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

const ICON_SIZE = 20;

const infoIcon = ({ label, icon }) => {
    return (
        <View style={ styles.infoIconContainer }>
            <View style={{ paddingEnd: 5 }}>
                <Image source={icon} style={styles.infoIconImage} resizeMode='contain'/>
            </View>
            <View>
                <Text style={styles.infoLabel}>{ label }</Text>
            </View>
        </View>
    )
}

export default infoIcon
