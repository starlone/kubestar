const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("service", {
  teste: () => ipcRenderer.invoke("onTeste"),
});
