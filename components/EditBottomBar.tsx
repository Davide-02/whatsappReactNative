import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BottomBar = (disabled:any) => {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.leftTextContainer}>
        <Text style={disabled.disabled ? styles.text : styles.textDisabled}>Archieve</Text>
      </View>
      <View style={styles.centerTextContainer}>
        <Text style={disabled.disabled ? styles.textDisabled : styles.text}>Read All</Text>
      </View>
      <View style={styles.rightTextContainer}>
        <Text style={disabled.disabled ? styles.text : styles.textDisabled}>Delete</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  leftTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightTextContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 16,
    color: '#0140dc'
  },
  textDisabled: {
    fontSize: 16,
    color: "#D2D2D2"
  },
});

export default BottomBar;
