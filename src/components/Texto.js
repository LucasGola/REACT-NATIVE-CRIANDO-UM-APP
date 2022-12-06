import { Text, StyleSheet } from "react-native";

export default function Texto({ style, children }) {
  let fontFormat;

  style?.fontWeight === 'bold' ? fontFormat = styles.fontBold : fontFormat = styles.fontNormal;

  return <Text style={[style, fontFormat]}>{children}</Text>;
}

const styles = StyleSheet.create({
  fontNormal: {
    fontFamily: 'montserratRegular',
    fontWeight: 'normal',
  },
  fontBold: {
    fontFamily: 'montserratBold',
    fontWeight: 'normal',
  }
});