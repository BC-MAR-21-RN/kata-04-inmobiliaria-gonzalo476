import React from 'react';
import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

const { SIZES, FONTS, COLORS } = theme; 
const ICON_SIZE = 20;

export const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: 150,
        backgroundColor: COLORS.lightBlue,
        padding: SIZES.padding * 2,
        justifyContent: "center",
        borderRadius: SIZES.radius,
        marginVertical: SIZES.base
    },
    flexRow: {
        flexDirection: "row"
    },
    flexRowCenter: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: SIZES.radius
    },
    imageContainer: {
        width: 100,
        height: "100%",
    },
    infoWrapper: {
        paddingStart: SIZES.padding2,
        justifyContent: "space-between",
    },
    title: {
        ...FONTS.body2_medium
    },
    icon: {
        width: 15,
        height: 15
    },
    textLocation: {
        ...FONTS.body3,
        color: COLORS.lightGray3
    },
    infoIconContainer: { 
        width: 50, 
        flexDirection: "row",
        alignItems: "center" 
    },
    infoIconImage: { 
        width: ICON_SIZE, 
        height: ICON_SIZE 
    },
    infoLabel: { 
        ...FONTS.body4_SemiBold
    },
    cardPrice: {
        ...FONTS.body2_SemiBold
    },
    ratingContainer: {
        width: 60,
        height: 30,
        flexDirection: "row",
        backgroundColor: COLORS.lightGold,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.radius * 2 
    },
    ratingBox: {
        zIndex: 10,
        position: "absolute",
        bottom: 10,
        left: "25%"
    },
    ratingText: {
        ...FONTS.body3_medium,
        color: COLORS.darkGold,
        top: 2
    },
    ratingIcon: {
        width: 15,
        height: 15,
        tintColor: COLORS.gold,
        margin: 2
    },
    favoritesIcon: {
        width: 15,
        height: 15,
    },
    favoritesContainer: {
        width: 30,
        height: 30,
        backgroundColor: COLORS.success,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    flexRowSpaced: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    favoritesWrapper: {
        position: "absolute",
        bottom: 15,
        right: 15
    }
})