import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';
import FAB from 'react-native-fab'

type Props = {};
export default class Cart extends Component<Props> {
  state = {
    counter: 0,
    counterAnimation: new Animated.Value(1),
    rotateAnimation: new Animated.Value(0),
    scaleAddBtnXAnimation: new Animated.Value(0),
    scaleAddBtnYAnimation: new Animated.Value(0),
    scaleCtrXAnimation: new Animated.Value(0),
    scaleCtrYAnimation: new Animated.Value(0),
  };

  handlePlusClick() {
    this.state.rotateAnimation.setValue(0);
    if (this.state.counter == 0) {
      this.animateBtn();
    }
    this.setState({
      counter: this.state.counter + 1
    });
    this.animateCtr();
  };

  handleMinusClick() {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
      this.animateCtr();
    }
  };

  animateBtn() {
    Animated.timing(this.state.rotateAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear
    }).start();
    Animated.timing(this.state.scaleAddBtnXAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear
    }).start();
    Animated.timing(this.state.scaleAddBtnYAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear
    }).start();
    Animated.timing(this.state.scaleCtrXAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear
    }).start();
    Animated.timing(this.state.scaleCtrYAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear
    }).start();
  }

  animateCtr() {
    Animated.spring(this.state.counterAnimation, {
      toValue: 0.8,
      speed: 0.1,
    }).start();
    setTimeout(() => {
      Animated.spring(this.state.counterAnimation, {
        toValue: 1,
        speed: 0.1,
      }).start();
    }, 50);
  }

  render() {
    const rotateAnimation = this.state.rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"]
    });
    const scaleAddBtnXAnimation = this.state.scaleAddBtnXAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.8]
    });
    const scaleAddBtnYAnimation = this.state.scaleAddBtnYAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.8]
    });
    const scaleCtrXAnimation = this.state.scaleAddBtnYAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    const scaleCtrYAnimation = this.state.scaleAddBtnYAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    const scaleMinusXAnimation = this.state.scaleAddBtnYAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.8]
    });
    const scaleMinusYAnimation = this.state.scaleAddBtnYAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.8]
    });
    const counterAnimation = this.state.counterAnimation;

    const counter = this.state.counter;

    return (
      <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2}>
          <View style={styles.box2_1}></View>
          <View style={styles.box2_2}></View>
        </View>
        <View>
          <Text style={styles.price}>$29</Text>
          <View style={styles.btns}>
            <Animated.View style={{
              ...styles.pcsView,
              transform: [
                { scaleX: scaleCtrXAnimation },
                { scaleY: scaleCtrYAnimation }
              ],
            }}>
              <View style={{
                ...styles.pcs
              }}>
                <Animated.Text style={{
                  ...styles.pcsCount,
                  transform: [
                    { scale: counterAnimation }
                  ]
                }}>{counter}
                </Animated.Text>
              </View>
            </Animated.View>
            <Animated.View style={{
              ...styles.minusBtn,
              transform: [
                { scaleX: scaleMinusXAnimation },
                { scaleY: scaleMinusYAnimation }
              ],
            }}>
              <FAB buttonColor="#FFF" iconTextColor="#000"
                onClickAction={this.handleMinusClick.bind(this)} visible={true}
                snackOffset={-50} style={styles.mnsBtn} iconTextComponent={<Text>-</Text>}
              />
            </Animated.View>
            <Animated.View style={{
              ...styles.plusBtn,
              transform: [
                { rotate: rotateAnimation },
              { scaleX: scaleAddBtnXAnimation },
              { scaleY: scaleAddBtnYAnimation }
              ],
            }}>
              <FAB buttonColor="#01b5c1" iconTextColor="#FFFFFF"
                onClickAction={this.handlePlusClick.bind(this)} visible={true}
                snackOffset={-50} style={styles.addBtn}
              />
            </Animated.View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  box1: {
    width: 300,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#AAA',
  },
  box2_1: {
    width: 180,
    backgroundColor: '#AAA',
    height: 30,
    width: 180,
    borderRadius: 5,
    marginTop: 30
  },
  box2_2: {
    width: 100,
    backgroundColor: '#AAA',
    height: 30,
    width: 100,
    borderRadius: 5,
    marginTop: -30,
    marginLeft: 200
  },
  btns: {
    marginTop: -50,
    height: 100
  },
  price: {
    fontSize: 30,
    color: '#888',
    marginTop: 30,
  },
  addBtn: {
    height: 55,
    width: 55
  },
  mnsBtn: {
    width: 55,
    height: 55
  },
  pcs: {
    backgroundColor: '#EEE',
    borderRadius: 35,
    height: 70,
    width: 70,
    overflow: "hidden",
  },
  pcsCount: {
    fontSize: 30,
    height: 70,
    width: 70,
    color: '#999',
    padding: 25,
    paddingTop: 18,
  },
  pcsView: {
    alignSelf: 'flex-end',
    width: 120,
  },
  minusBtn: {
    alignSelf: 'flex-start',
    width: 100,
    marginLeft: 140,
    marginTop: -30
  },
  plusBtn: {
    alignSelf: 'flex-end',
    width: 95,
  }
});
