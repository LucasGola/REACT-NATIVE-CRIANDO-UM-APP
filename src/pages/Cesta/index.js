
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import Top from './components/Top';
import Details from './components/Details';
import Item from './components/Item';
import Texto from '../../components/Texto';

export default function Cesta({ top, details, itens }) {


  return <>
    <FlatList
      data={itens.list}
      renderItem={Item}
      keyExtractor={({ name }) => name}
      ListHeaderComponent={() => {
        return <>
          <Top {...top} />

          <View style={styles.cesta}>
            <Details {...details} />
            <Texto style={styles.title}>{itens.title}</Texto>
          </View>
        </>;
      }}
    />
  </>;
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});