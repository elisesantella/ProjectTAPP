import { StyleSheet } from 'react-native';

const FooterStyles = StyleSheet.create({
  footer: {
    flex:3,
    //backgroundColor: "red",
    flexDirection: "column-reverse",
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  merchantContainer: {
    //backgroundColor: "blue",
    height: "70%",
    width: "50%",
    justifyContent: "flex-start",
  },
  merchantText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "aliceblue",
    textDecorationLine: "underline",
    textDecorationStyle: 'double',
  },

});

export default FooterStyles;
