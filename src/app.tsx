import React, {Component} from 'react';
import SimpleCamera from './screen/camera/camera.component';

export interface Props { }
export interface State { }

export default class App extends Component<Props,State> {
  render() {
    return (
      <SimpleCamera />
    );
  }
}