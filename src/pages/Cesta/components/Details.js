import {
  Image, StyleSheet, View, TouchableOpacity
} from 'react-native';
import Texto from '../../../components/Texto';

export default function Details({ name, farmLogo, farmName, description, price, buttom }) {
  return <>
      <Texto style={styles.name}>{name}</Texto>
      <View style={styles.fazenda}>
        <Image source={farmLogo} style={styles.logo} />
        <Texto style={styles.farmName}>{farmName}</Texto>
      </View>
      <Texto style={styles.description}>{description}</Texto>
      <Texto style={styles.price}>R{price}</Texto>

      <TouchableOpacity style={styles.buttom} onPress={() => console.log('botão')}>
        <Texto style={styles.buttomText}>{buttom}</Texto>
      </TouchableOpacity>
  </>;
}

const styles = StyleSheet.create({
  buttom: {
    marginTop: 16,
    backgroundColor: '#2a9f25',
    paddingVertical: 16,
    borderRadius: 8,
  },
  buttomText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  logo: {
    width: 32,
    height: 32,
  },
  name: {
    fontWeight: 'bold',
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2a9f25',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  }
});