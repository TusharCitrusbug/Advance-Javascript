var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
function upload_page(res,fail=false){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    if (fail === true) {
        res.write('<p>Please upload file of size lessthen 5000 bytes!!!!!!');
    }
    return res.end();
    
}

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        
        if (files.filetoupload.size>50000) {   
            
            upload_page(res,true);

            
        }else{
            var oldpath = files.filetoupload.filepath;
            var newpath = '/home/citrusbug/compney/' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
              if (err) throw err;
              res.write('File uploaded and moved!');
              res.end();
            });
        }
     
 });
  } else {
    upload_page(res);
  }
}).listen(8080); 