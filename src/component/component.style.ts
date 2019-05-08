import { StyleSheet, Dimensions } from 'react-native';

export const VW = Dimensions.get('window').width;
export const VH = Dimensions.get('window').height;

export const COM = StyleSheet.create({
  circleOuter: {
    width: 80,
    height: 80,
    backgroundColor: 'transparent',
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInner: {
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomCircleCon: {
    width: 36,
    height: 36,
    backgroundColor: 'transparent',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomCircleText: {
    color: '#ffffff',
    fontSize: 14,
  }
})