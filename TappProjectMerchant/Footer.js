import React from 'react';
import {Text, View} from 'react-native';
import styles from './StyleSheets/FooterStyles.js'; // import the stylesheet

function Footer() {
  return(
    <View style ={styles.footer}>
    <View style ={styles.merchantContainer}>
      <Text style={styles.merchantText}>
        <Text>***Merchant Version***</Text>
      </Text>
    </View>
  </View>
  );
}

export default Footer;