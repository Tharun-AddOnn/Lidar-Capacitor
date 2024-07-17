package com.capacitor.plugin.lidar;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class Lidar extends Plugin {

    @PluginMethod
    public boolean isLiDARAvailable(PluginCall call) {
        call.reject("Lidar Not Available in Android");
    }
    @PluginMethod
    public boolean startScan(PluginCall call) {
        call.reject("Lidar Not Available in Android");
    }
}
