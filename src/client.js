var source = new EventSource('/events');
source.onmessage = function(e) {
document.body.innerHTML += e.data + '';
};