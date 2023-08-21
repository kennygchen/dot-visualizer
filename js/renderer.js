const input = document.getElementById("input");
const text = document.getElementById("text");
const render = document.getElementById("render");

var dot = "";

function loadFile(e) {
  var fr = new FileReader();
  fr.addEventListener("loadend", function () {
    dot = fr.result;
    if (dot !== "") {
      //   graphDot(dot);
      render.innerText =
        'd3.select("#graph").graphviz().renderDot(' + dot + ");";
      console.log(render.innerText);
    }
  });
  fr.readAsText(e.target.files[0]);
}

function graphDot(dot) {
  console.log("graphing dot file");
  renderDot.render();
}

input.addEventListener("change", loadFile);
