import React, { useEffect, useRef } from 'react';
import {  Animated, Easing, Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './StyleSheets/StartStyles.js'; // import the stylesheet
import Footer from './Footer';


function Start({ navigation, route}) {
 
  
    return(
      <View style={styles.container}>
      <ImageBackground 
         source={require('./Images/BlueBackground.png')} 
         resizeMode= "stretch" 
         style={styles.background}>
         <View style ={styles.mainBody}>
          <View style ={styles.tappContainer}>
            <View style = {styles.spaceContainer}></View>
            <View style ={styles.tappLogoContainer}>
              <Image 
                style={styles.tappLogoImage}
                source={require('./Images/Tapp.drawio.png')} />
              <Text style={styles.welcomeText}>
                <Text>Welcome</Text>
              </Text>
            </View>
          </View> 
          <View style ={styles.tappCoinContainer}>
            <View style ={styles.coinContainer}>
              <Image 
                style={styles.coinLogoImage}
                source={require('./Images/Coin.drawio.png')} />
            </View>
          </View>
          <View style ={styles.buttonContainer}>
            <View style ={styles.signInContainer}>
              <View style ={styles.signInButton}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style ={styles.createAccountContainer}>
              <View style ={styles.createAccountButton}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Footer></Footer>
         </View>
         
       </ImageBackground>
   </View>
    );
  }
  
  export default Start;