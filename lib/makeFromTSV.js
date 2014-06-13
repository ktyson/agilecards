// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  
    var objCards = {};
    objCards.arrCards = [];
    
    var arrLines = data.split("\n");
    
    
  arrLines.forEach(function(val, idx) {
      
      var arrFields = val.split("\t");
      //arrFields.forEach(function(val, idx) {
          console.log(idx, val);
      
        var objCard = {};
          //id	area	practice	slogan	allies	involves
        objCard.id = arrFields[0];
          objCard.area = arrFields[1];
          objCard.practice = arrFields[2];
          objCard.slogan = arrFields[3];
          objCard.allies = arrFields[4];
          objCard.involves = arrFields[5];
          
      
      
        objCards.arrCards.push(objCard);
      
      //});     
      
      
  });   
    
    console.log(JSON.stringify(objCards,  null, " "));
  
});