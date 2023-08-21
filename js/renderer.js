const input = document.getElementById("input");
const text = document.getElementById("text");

var dot = "";

function loadFile(e) {
  var fr = new FileReader();
  fr.addEventListener("loadend", function () {
    dot = fr.result;
    if (dot !== "") {
      graphDot(dot);
    }
  });
  fr.readAsText(e.target.files[0]);
}

function graphDot(dot) {
  console.log("graphing dot file");
  renderDot.render();
}

input.addEventListener("change", loadFile);
