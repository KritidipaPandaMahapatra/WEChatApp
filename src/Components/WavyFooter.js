import React from 'react';
import { View ,StyleSheet} from 'react-native';
import Svg, { Circle } from 'react-native-svg';
export default function WavyFooter({ customStyles
    // customTop,
    // customBgColor,
    // customWavePattern
}) {
    return (
      <View style={customStyles}>
        {/* <View style={styles.container}> */}
        <Svg height="50%" width="50%" viewBox="0 0 80 100">
          <Circle cx="50" cy="50" r="50" 
          //stroke="purple"
           strokeWidth=".5" fill="#9dc2ff" />
        </Svg>
      {/* </View> */}
      </View>
    );
  }
  const styles = StyleSheet.create({
    container:{
       left:270,
       top:160,
    },
  })