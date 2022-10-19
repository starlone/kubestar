const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("service", {
  getPods: (namespace) => ipcRenderer.invoke("onGetPods", namespace),
});
