// import { graphviz } from "d3-graphviz";
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("renderDot", {
  render: (id) => d3.select(id).graphviz().renderDot("digraph  {a -> b a -> c}"),
});

// d3.select("#graph").graphviz().renderDot("digraph  {a -> b a -> c}");
