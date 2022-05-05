import Adapt from 'core/js/adapt';
import device from 'core/js/device';
import { templates } from 'core/js/reactHelpers';
import React from 'react';
import ReactDOM from 'react-dom';
class BackgroundVideoView extends Backbone.View {

  className() {
    return 'backgroundvideo';
  }

  initialize() {
    this.render(device.screenSize);
    Adapt.on('device:changed', this.render, this);
  }

  render(screenSize) {
    this.model.set('_screenSize', screenSize);
    const props = { ...this.model.toJSON() };
    const Template = templates[this.constructor.template.replace('.jsx', '')];
    ReactDOM.render(<Template {...props} />, this.el);
  }

}
BackgroundVideoView.template = 'backgroundvideo';

export default BackgroundVideoView;
