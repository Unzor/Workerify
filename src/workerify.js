var workerify={};


workerify.workerFromURL=function(url, callback_fn){
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
  var blob = new Blob([
this.responseText
], { type: "text/javascript" })

 var worker_obj_url = new Worker(window.URL.createObjectURL(blob));

callback_fn(worker_obj_url);

    }
  };


  xhttp.open("GET", url, true);
  xhttp.send();
}


workerify.createWorkerFromCode=function(code){
  var blob = new Blob([
code
], { type: "text/javascript" })

 var worker_obj_code= new Worker(window.URL.createObjectURL(blob));

return worker_obj_code;
}
