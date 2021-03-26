import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "", //
    secondary: "", //
    lightBlue: "rgb(245,253,255)",
    success: "rgb(0,176,116)", // green
    danger: "#D6040E", // red
    darkBrown: "rgb(125,102,45)",
    gold: "#EEBA00",
    lightGold: "rgb(251,237,183)",
    darkGold: "#7A6229",

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#EEEEEE",
    lightGray2: "#BBBBBB",
    lightGray3: "#888888",
    lightGray4: "#333333",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 10,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 24,
    h3: 20,
    h4: 18,
    body1: 24,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "PoppinsLatin-SemiBold", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "PoppinsLatin-SemiBold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "PoppinsLatin-SemiBold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "PoppinsLatin-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "PoppinsLatin-SemiBold", fontSize: SIZES.h4, lineHeight: 20 },

    body1: { fontFamily: "PoppinsLatin-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "PoppinsLatin-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "PoppinsLatin-Regular", fontSize: SIZES.body3, lineHeight: 18 },
    body4: { fontFamily: "PoppinsLatin-Regular", fontSize: SIZES.body4, lineHeight: 16 },
    body5: { fontFamily: "PoppinsLatin-Regular", fontSize: SIZES.body5, lineHeight: 14 },

    body1_medium: { fontFamily: "PoppinsLatin-Medium", fontSize: SIZES.body1, lineHeight: 36 },
    body2_medium: { fontFamily: "PoppinsLatin-Medium", fontSize: SIZES.body2, lineHeight: 30 },
    body3_medium: { fontFamily: "PoppinsLatin-Medium", fontSize: SIZES.body3, lineHeight: 18 },
    body4_medium: { fontFamily: "PoppinsLatin-Medium", fontSize: SIZES.body4, lineHeight: 16 },
    body5_medium: { fontFamily: "PoppinsLatin-Medium", fontSize: SIZES.body5, lineHeight: 14 },

    body1_SemiBold: { fontFamily: "PoppinsLatin-SemiBold", fontSize: SIZES.body1, lineHeight: 36 },
    body2_SemiBold: { fontFamily: "PoppinsLatin-SemiBold", fontSize: SIZES.body2, lineHeight: 30 },
    body3_SemiBold: { fontFamily: "PoppinsLatin-SemiBold", fontSize: SIZES.body3, lineHeight: 18 },
    body4_SemiBold: { fontFamily: "PoppinsLatin-SemiBold", fontSize: SIZES.body4, lineHeight: 16 },
    body5_SemiBold: { fontFamily: "PoppinsLatin-SemiBold", fontSize: SIZES.body5, lineHeight: 14 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;