/* Workerify v1.0
https://github.com/Unzor/workerify
Use however you want it.
*/

Worker.workerFromURL=function(url){
function getWorkerURL(worker_url) {
  const content = `importScripts( "${ worker_url }" );`;
  return URL.createObjectURL( new Blob( [ content ], { type: "text/javascript" } ) );
}
  
  return new Worker(getWorkerURL(url));
}


Worker.workerFromCode=function(code){
  var blob = new Blob([
code
], { type: "text/javascript" })

 var worker_obj_code= new Worker(window.URL.createObjectURL(blob));

return worker_obj_code;
}
