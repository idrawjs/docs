const fs = require('fs');
const path = require('path');

const fromDist = path.join(__dirname, '..', 'src', 'assets');
const toDir = path.join(__dirname, '..', 'docs', 'assets');

// fixPageAssetsPath();
copyDir(fromDist, toDir, () => {
  console.log('Copy files success!');
});

// function fixPageAssetsPath() {
//   const htmlPath = path.join(distDir, 'index.html');
//   let html = fs.readFileSync(htmlPath, {encoding: 'utf8' });
//   html = html.replace(/src="\//ig, 'src="./').replace(/href="\//ig, 'href="./');
//   fs.writeFileSync(htmlPath, html);
// }

function copyDir(src, dist, callback) {
  fs.access(dist, function (err) {
    if (err) {
      fs.mkdirSync(dist);
    }
    _copy(null, src, dist);
  });

  function _copy(err, src, dist) {
    if (err) {
      callback(err);
    } else {
      fs.readdir(src, function (err, paths) {
        if (err) {
          callback(err);
        } else {
          paths.forEach(function (item) {
            const _src = path.join(src, item);
            const _dist = path.join(dist, item);
            fs.stat(_src, function (err, stat) {
              if (err) {
                callback(err);
              } else {
                if (stat.isFile()) {
                  fs.writeFileSync(_dist, fs.readFileSync(_src));
                } else if (stat.isDirectory()) {
                  copyDir(_src, _dist, callback);
                }
              }
            });
          });
        }
      });
    }
  }
}
