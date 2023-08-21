// import * as d3 from "d3";
// let d3 = await import('d3')
// var d3 = require('d3')
// const d3 = require("d3-graphviz");
// const graph = document.getElementById('graph')
// import { Graphviz } from "@hpcc-js/wasm/graphviz";
import * as d3 from "./lib/d3.v7.min.js";
import { Graphviz } from "https://cdn.jsdelivr.net/npm/@hpcc-js/wasm/dist/graphviz.js";

const graphviz = await Graphviz.load();
const dot = "digraph G { Hello -> World }";
const svg = graphviz.dot(dot);
console.log(graphviz.version());

d3.select("#graph").graphviz().renderDot("digraph  {c -> b}");
