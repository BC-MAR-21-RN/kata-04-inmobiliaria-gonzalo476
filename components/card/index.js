import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { icons } from '../../constants';
import { SIZES } from '../../constants/theme';
import InfoIcon from './infoIcon';
import Rating from './rating';
import AddFavorites from './addFavorites';

const index = ({ name, image, location, beds, baths, measure, price, rating }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.flexRow}>
                <View style={styles.imageContainer}>
                    <View style={styles.ratingBox}>
                        <Rating rating={rating}/>
                    </View>
                    <Image source={{uri: image}} style={styles.image}/>
                </View> 
                <View style={styles.infoWrapper}>
                    <Text style={styles.title}>{ name }</Text>
                    <View style={styles.flexRowCenter}>
                        <Image source={icons.pin} style={styles.icon} resizeMode='contain'/>
                        <View style={{marginHorizontal: SIZES.base}}>
                            <Text style={styles.textLocation}>{ location }</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <InfoIcon label={beds} icon={icons.bed}/>
                        <InfoIcon label={baths} icon={icons.bath}/>
                        <InfoIcon label={measure} icon={icons.measure}/>
                    </View>
                    <View>
                        <Text style={styles.cardPrice}>${ price }</Text>
                    </View>
                </View>
            </View>
                    <View style={styles.favoritesWrapper}>
                        <AddFavorites/>
                    </View>
        </View>
    )
}

export default index
