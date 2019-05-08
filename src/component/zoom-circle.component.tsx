import React from 'react';

import { TouchableOpacity, Text, Platform } from 'react-native';
import { COM } from './component.style';

interface Props {
  zoomFactor: number,
  onZoomed: (zoomFactor: number) => void
}

export const ZoomCircle = (props: Props) => {
  return <TouchableOpacity style={COM.zoomCircleCon} onPress={() => {
    if (props.zoomFactor >= 0 && props.zoomFactor < 0.2) {
      props.onZoomed(0.2);
    } else if (props.zoomFactor >= 0.2 && props.zoomFactor < 0.5) {
      props.onZoomed(0.5);
    } else if (props.zoomFactor >= 0.5 && props.zoomFactor < 1) {
      props.onZoomed(1);
    } else {
      props.onZoomed(0);
    }
  }}>
    <Text numberOfLines={1} style={COM.zoomCircleText}>
      {getZoomText(props.zoomFactor)} x
    </Text>
  </TouchableOpacity>
}

const getZoomText = (zoomFactor: number) => {
  return zoomFactor == 0 ? 1 : round(zoomFactor) * 10;
}

const round = (num:number) => {
  return Math.round(num * 100) / 100
}