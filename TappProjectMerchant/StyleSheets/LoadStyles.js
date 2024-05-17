import { StyleSheet } from 'react-native';

const LoadStyles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "white",
  flexDirection: "column",
},
background: {
    flexDirection: "column",
    height: "100%",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  mainBody: {
    flexDirection: "column",
    //backgroundColor: "powderblue",
    height: "100%",
    width: '100%',
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tappContainer: {
    flexDirection: "column",
    //backgroundColor: "red",
    height: "50%",
    width: '100%',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  tappLogoContainer: {
    flexDirection: "column",
    //backgroundColor: "green",
    height: "50%",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  tappLogoImage: {
    alignSelf: "center",
    height: "50%",
    width: "80%",
  },
  footer: {
    backgroundColor: "red",
    flexDirection: "column-reverse",
    height: "10%",
    width: "100%",
  }

});

export default LoadStyles;