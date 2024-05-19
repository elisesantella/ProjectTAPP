import React, { useEffect, useRef } from 'react';
import {  Animated, Easing, Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './StyleSheets/LoadStyles.js'; // import the stylesheet
import Footer from './Footer';


function Load({ navigation, props}) {
  const fadeValue = useRef(new Animated.Value(0)).current;
  //const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    /*const spinAnimation = Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true
        }
      )
    );*/

    const fadeAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(
          fadeValue,
          {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          }
        ),
        Animated.timing(
          fadeValue,
          {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
          }
        )
      ])
    );

    //spinAnimation.start();
    fadeAnimation.start();
   

    return () => 
      //spinAnimation.stop(); 
      fadeAnimation.stop();
    
  }, []);

  setTimeout(() => {
    navigation.navigate('Start');
  }, 5000);

  /**const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });*/

  const fadeStyle = {
    opacity: fadeValue
  };

  
  
    return(
      <View style={styles.container}>
         <ImageBackground 
            source={require('./Images/BlueBackground.png')} 
            resizeMode= "stretch" 
            style={styles.background}>
            <View style ={styles.mainBody}>
                <View style ={styles.tappContainer}>
                    <View style ={styles.tappLogoContainer}>
                        <Image 
                            style={styles.tappLogoImage}
                            source={require('./Images/Tapp.drawio.png')} />
                    </View>
                </View> 
                <View style ={styles.tappCoinContainer}>
                  <View style ={styles.coinContainer}>
                    <Animated.Image 
                            style={[styles.coinLogoImage, { ...fadeStyle}]}
                            source={require('./Images/Coin.drawio.png')} />
                  </View>
                </View> 
                <Footer></Footer>
            </View>
          </ImageBackground>
      </View>
    );
  }
  
  export default Load;