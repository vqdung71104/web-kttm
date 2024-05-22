function displayVn() {
  var vnList = document.getElementById("vn-list");
  var message = document.getElementById("Word_list").value;
  var lines = message.split("\n").filter(function(line) {
    return line.trim() !== ""; // Loại bỏ các dòng trống
  });

  vnList.innerHTML = "";

  var empty_lines_length = 1; // Độ dài của dòng trống được in ra
  var empty_lines = new Array(empty_lines_length);
  for (var i = 0; i < empty_lines.length; i++) {
    empty_lines[i] = "----------------------------------------------------------------------"; 
  }

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    var parts = line.split(":");

    if (parts.length === 2) {
      var english = (i + 1) + '. ' + parts[0].trim();
      var vietnamese = (i + 1) + '. ' + parts[1].trim();
      if ((i + 1) % 2 == 0) {
        for (var j = 0; j < empty_lines.length; j++) {

          english += empty_lines[j];
          vietnamese += empty_lines[j];
        }
      }

      var li = document.createElement("li");
      li.textContent = vietnamese;
      vnList.appendChild(li);
    }
  }
}

function displayEn() {
  var enList = document.getElementById("en-list");
  var message = document.getElementById("Word_list").value;
  var lines = message.split("\n").filter(function(line) {
    return line.trim() !== ""; // Loại bỏ các dòng trống
  });

  enList.innerHTML = "";

  var empty_lines_length = 1; // Độ dài của dòng trống được in ra
  var empty_lines = new Array(empty_lines_length);
  for (var i = 0; i < empty_lines.length; i++) {
    empty_lines[i] = "----------------------------------------------------------------------"; 
  }

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    var parts = line.split(":");

    if (parts.length === 2) {
      var english = (i + 1) + '. ' + parts[0].trim();
      var vietnamese = (i + 1) + '. ' + parts[1].trim();
      if ((i + 1) % 2 == 0) {
        for (var j = 0; j < empty_lines.length; j++) {
          english += empty_lines[j];
          vietnamese += empty_lines[j];
        }
      }

      var li = document.createElement("li");
      li.textContent = english;
      enList.appendChild(li);
    }
  }
}
