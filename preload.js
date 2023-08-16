// const { contextBridge } = require('electron')
// const d3 = require("d3-graphviz");
// import { Graphviz } from "@hpcc-js/wasm/graphviz";
// import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})