function ResizeMonitor(interval) {
    var handle = null;
    if (interval == null) {
      interval = 10; // 10 ms
  }
    this.startMonitoring = function(element, callback) {
      if (handle) {
          return;
      }
        var lastWidth = element.offsetWidth;
        var lastHeight = element.offsetHeight;
        var action = function() {
            var currentWidth = element.offsetWidth;
            var currentHeight = element.offsetHeight;
            if (lastWidth === currentWidth && lastHeight === currentHeight) {
              return;
          }
            callback(currentWidth, currentHeight, lastWidth, lastHeight);
            lastWidth = currentWidth;
            lastHeight = currentHeight;
      };
        handle = setInterval(action, interval);
  };
    this.stopMonitoring = function() {
        if (handle) {
          clearInterval(handle);
            handle = null;
      }
  };
};


// Redimensionnement du canvas
var monitor = new ResizeMonitor(10);
const right_block = document.querySelector('.right-block');
var onResize = function(currentWidth, currentHeight, lastWidth, lastHeight) {
//console.log('currentWidth=' + currentWidth + ' currentHeight=' + currentHeight);
canvas.width = currentWidth;
canvas.height = currentHeight;
refresh()
}
monitor.startMonitoring(right_block, onResize);