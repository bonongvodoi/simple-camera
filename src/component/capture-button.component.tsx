import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { COM } from './component.style';

interface Props {
  onCaptured: () => void
}

export const CaptureButton = (props: Props) => {
  return <TouchableOpacity style={COM.circleOuter} onPress={() => {props.onCaptured && props.onCaptured()}}>
    <View style={COM.circleInner} />
  </TouchableOpacity>
}