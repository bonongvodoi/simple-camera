import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { CAM_S, VW } from './camera.style'
import { FlashToggle } from '../../component/flash-toggle.component';
import { CameraType } from '../../component/camera-type.component';
import { CaptureButton } from '../../component/capture-button.component';
import { ZoomCircle } from '../../component/zoom-circle.component';

interface Props { }
interface State {
  textBlocks?: any,
  flashStatus: string,
  cameraType: string,
  zoomFactor: number,
}

export default class SimpleCamera extends Component<Props, State> {
  state = {
    textBlocks: [],
    flashStatus: 'off',
    cameraType: 'back',
    zoomFactor: 0,
  }
  camera: any = null;
  render() {
    return (
      <View style={CAM_S.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={CAM_S.preview}
          type={this.state.cameraType as any}
          flashMode={this.state.flashStatus as any}
          zoom={this.getZoom(this.state.zoomFactor)}
          onTextRecognized={({ textBlocks }) => this.textRecognized(textBlocks)}
        >
        </RNCamera>
        <View style={CAM_S.flashContainer}>
          <FlashToggle flashStatus={this.state.flashStatus} onFlashChanged={(flashStatus => this.setState({ flashStatus }))} />
        </View>
        <View style={CAM_S.cameraTypeContainer}>
          <CameraType cameraType={this.state.cameraType} onCameraTypeChanged={(cameraType => this.setState({ cameraType }))} />
        </View>
        <View style={CAM_S.zoomCon}>
          <ZoomCircle onZoomed={(zoomFactor) => this.setState({ zoomFactor })} zoomFactor={this.state.zoomFactor} />
        </View>
        <View style={CAM_S.captureCon}>
          <CaptureButton onCaptured={() => this.takePicture(this.camera)} />
        </View>
      </View>
    );
  }

  textRecognized(textBlocks: any) {
    this.setState({ textBlocks })
  }

  renderTextBlocks = () => (
    <View style={CAM_S.facesContainer} pointerEvents="none">
      {this.state.textBlocks.map(this.renderTextBlock)}
    </View>
  );

  renderTextBlock = ({ bounds, value }: any) => (
    <React.Fragment key={value + bounds.origin.x}>
      <Text style={[CAM_S.textBlock, { left: bounds.origin.x, top: bounds.origin.y }]}>
        {value}
      </Text>
      <View
        style={[
          CAM_S.text,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}
      />
    </React.Fragment>
  );

  takePicture = async function (camera: RNCamera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    console.log(data.uri);
  };

  getZoom = (zoomFactor: number): number => {
    const NORMAL = 1
    const IOS = 0.04;
    if (Platform.OS == 'ios') {
      return zoomFactor * (IOS / NORMAL)
    } else {
      return zoomFactor;
    }
  }

  round = (num: number) => {
    return Math.round(num * 100) / 100
  }
}

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      width: VW,
    }}
  >
    <Text>Waiting</Text>
  </View>
);