import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-elements';
import Cart from './components/cart';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Cart></Cart>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
