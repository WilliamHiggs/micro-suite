var path = require("path"),
  fs = require("fs"),
  args = require("./File.js");

function fromDir(startPath, filter) {

  if (!fs.existsSync(startPath)) {
    console.log("no directory ", startPath, " exists, please define your directory");
    return;
  }

  var files = fs.readdirSync(startPath);

  for (var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);

    if (stat.isDirectory()) {
      fromDir(filename, filter);
    } else if (filename.indexOf(filter) >= 0) {
      //var nodeModuleName = `./${filename.replace(/\\/g, "/")}`;
      fs.readFile(filename, {encoding: 'utf-8'}, function(err, data) {
        const {describe, it, expect} = require('test.js');
        eval(data);
      });
    }
  }
}

try {
  fromDir(args[0], args[1]);
} catch (error) {
  console.error(error);
}
