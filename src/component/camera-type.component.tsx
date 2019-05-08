import React from 'react';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const cameraTypeOrder: any = {
  back: 'front',
  front: 'back'
};

const cameraTypeIconName = 'ios-reverse-camera';

interface Props {
  cameraType: string | 'front' | 'back',
  onCameraTypeChanged: (status: string) => void
}

export const CameraType = (props: Props) => {
  return <TouchableOpacity onPress={() => {
    props.onCameraTypeChanged && props.onCameraTypeChanged(cameraTypeOrder[props.cameraType])
  }}>
    <Icon name={cameraTypeIconName} size={40} color="#ffffff" />
  </TouchableOpacity>
}