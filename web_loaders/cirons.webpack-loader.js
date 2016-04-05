module.exports = function(content) {
    var callback = this.async();
    if (!callback) return someSyncOperation(content);
    someAsyncOperation(content, function(err, result) {
        if (err) return callback(err);
        callback(null, result);
    });
};

function someAsyncOperation(content){
    var fs = require('fs');
    fs.writeFile("./webpack_test/"+(Math.floor(Math.random() * 9999) + 1000).toString()+".js", content, function(err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}
