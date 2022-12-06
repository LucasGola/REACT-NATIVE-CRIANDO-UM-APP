import { Image, StyleSheet, Dimensions } from "react-native";

import Texto from "../../../components/Texto";
import tomate from '../../../../assets/tomates(2040x1360).png';

const width = Dimensions.get('screen').width;

export default function Top({ title }) {
  return (
    <>
      <Image source={tomate} style={styles.tomate} />
      <Texto style={styles.title}>{title}</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  tomate: {
    width: '100%',
    height: 1360 / 2040 * width
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16
  },
});