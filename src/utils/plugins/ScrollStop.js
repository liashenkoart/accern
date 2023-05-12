import {ScrollbarPlugin} from 'smooth-scrollbar';

class StopScrollPlugin extends ScrollbarPlugin {
  static pluginName = 'stop';

  static defaultOptions = {
    open: false,
  };

  transformDelta(delta) {
    return this.options.open ? { x: 0, y: 0 } : delta;
  }
}

export default StopScrollPlugin;

