import React from 'react';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const flashModeOrder: any = {
  off: 'on',
  on: 'torch',
  torch: 'off',
};

const flashIconName: any = {
  off: 'ios-flash-off',
  on: 'ios-flash',
  torch: 'ios-flashlight',
};

interface Props {
  flashStatus: string | 'on' | 'off' | 'torch',
  onFlashChanged: (status: string) => void
}

export const FlashToggle = (props: Props) => {
  return <TouchableOpacity onPress={() => {
    props.onFlashChanged && props.onFlashChanged(flashModeOrder[props.flashStatus])
  }}>
    <Icon name={flashIconName[props.flashStatus]} size={30} color="#ffffff" />
  </TouchableOpacity>
}