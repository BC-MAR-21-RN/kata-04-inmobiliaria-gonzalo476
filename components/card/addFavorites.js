import React, { useState } from 'react'
import { View, TouchableOpacity, Image} from 'react-native'

import { icons, theme } from '../../constants';
import { styles } from './styles';

const { COLORS } = theme;

const addFavorites = () => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <TouchableOpacity 
            style={styles.favoritesContainer}
            onPress={() => setIsToggled(!isToggled)}
            >
            <Image 
                source={icons.heart} 
                style={[styles.favoritesIcon, { tintColor: isToggled ? COLORS.danger : COLORS.white }]} 
                resizeMode='contain'
            />
        </TouchableOpacity>
    )
}

export default addFavorites
