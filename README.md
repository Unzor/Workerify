# Workerify
Workerify is a JavaScript library that lets you use JavaScript workers from URLs other than your site and from the same JavaScript file.

# API
Examples:
```javascript
var workerifyObject=new Worker.workerFromURL('https://workerify-testing.glitch.me/script.js');
workerifyObject.postMessage([1, 2]);
workerifyObject.onmessage = function(e) {
alert('Message received from worker: ' + JSON.stringify(e));
}
```

Returns:

`Message received from worker: {"istrusted": "true"}`


## Example Code 2
```javascript
var workerifyObject=new Worker.workerFromCode(`onmessage = function(e) {
console.log('Worker: Message received from main script');
const result = e.data[0] * e.data[1];
if (isNaN(result)) {
postMessage('Please write two numbers');
} else {
const workerResult = 'Result: ' + result;
console.log('Worker: Posting message back to main script');
postMessage(workerResult);
}
}`);
workerifyObject.postMessage([1, 2]);
workerifyObject.onmessage = function(e) {
alert('Message received from worker: ' + JSON.stringify(e));
}
```

Returns:

`Message received from worker: {"istrusted": "true"}`
