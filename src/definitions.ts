declare module '@capacitor/core' {
  interface PluginRegistry {
    Lidar: LidarPlugin;
  }
}

export interface LidarPlugin {
  isLiDARAvailable():Promise<{available : Boolean}>;
  startScan():Promise<void>;
}
