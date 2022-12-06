import { View, Image, StyleSheet, FlatList } from "react-native";
import Texto from "../../../components/Texto";

export default function ({ item: { name, img } }) {
  return (
    <View style={styles.items}>
      <Image source={img} style={styles.images} />
      <Texto style={styles.itemName}>{name}</Texto>
    </View>);
};

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    alignItems: 'center',
    paddingVertical: 16,
    marginHorizontal: 16
  },
  itemName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646'
  },
  images: {
    width: 46,
    height: 46,
  }
});