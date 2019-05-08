import { StyleSheet, Dimensions } from 'react-native';

export const VW = Dimensions.get('window').width;
export const VH = Dimensions.get('window').height;

export const CAM_S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  preview: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: VW,
    height: (4/3) * VW,
    marginBottom:  VH * 0.23,
  },
  capture: {
    width: 50,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    width: 70,
    height: 70,
    backgroundColor: 'transparent',
    borderRadius: 35,
    borderWidth: 4,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  zoomCon: {
    position: 'absolute',
    bottom: 135,
    left: 0,
    width: VW,
    justifyContent: 'center',
    alignItems: 'center'
  },
  captureCon: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    width: VW,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flashContainer: {
    position: 'absolute',
    left: 15,
    top: 40,
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraTypeContainer: {
    position: 'absolute',
    right: 20,
    top: 40,
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  textBlock: {
    color: '#FF0000',
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FF0000',
    justifyContent: 'center',
  },
});