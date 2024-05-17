import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './StyleSheets/LoadStyles.js'; // import the stylesheet
import Footer from './Footer';


function Load({ navigation }) {
  
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
            </View>
          </ImageBackground>
      </View>
    );
  }
  
  export default Load;