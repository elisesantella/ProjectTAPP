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
    height: "45%",
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
  tappCoinContainer: {
    flexDirection: "column",
    //backgroundColor: "green",
    height: "45%",
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  coinContainer: {
    flexDirection: "column",
    //backgroundColor: "pink",
    height: "60%",
    width: '60%',
    justifyContent: "flex-start",
    alignItems: "center",
  },
  coinLogoImage: {
    alignSelf: "center",
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default LoadStyles;