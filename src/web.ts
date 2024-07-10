import { WebPlugin } from '@capacitor/core';
import { LidarPlugin } from './definitions';

export class LidarWeb extends WebPlugin implements LidarPlugin {
  constructor() {
    super({
      name: 'Lidar',
      platforms: ['web'],
    });
  }
  isLiDARAvailable(): Promise<{ available: Boolean; }> {
    throw new Error('Method not implemented.');
  }
  startScan(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

const Lidar = new LidarWeb();

export { Lidar };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Lidar);
