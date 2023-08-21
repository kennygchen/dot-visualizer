const { contextBridge } = require("electron");
const { dot } = require("graphlib-dot");
var dagreD3 = require("dagre-d3");
var render = new dagreD3.render();
// import {select} from "d3";

contextBridge.exposeInMainWorld("dot", {
  // read: () => dot.read("digraph  {a -> b a -> c}"),
  // render: (graph) => render(select("graph"), graph),
});

// d3.select("#graph").graphviz().renderDot("digraph  {a -> b a -> c}");
