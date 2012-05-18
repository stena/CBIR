if (window.addEventListener) {
    window.addEventListener('load', function () {
        var canvas, context;
        
        function init() {
            canvas = document.getElementById('number');
            if (!canvas) {
                alert('Error: Cannot find the canvas element!');
                return;
            }
            
            if (!canvas.getContext) {
                alert('Error: no canvas.getContext!')
                return;
            }
            
            context = canvas.getContext('2d');
            
            canvas.addEventListener('mousemove', ev_mousemove, false);
        }
        
        var started = false;
        
        function ev_mousemove(ev) {
            var x, y;
            
            if (ev.layerX || ev.layerX == 0) { // Firefox
                x = ev.layerX;
                y = ev.layerY;
            } else if (ev.offsetX || ev.offsetX == 0) {  // Opera
                x = ev.offsetX;
                y = ev.offsetY;
            }
            
            if (!started) {
                context.beginPath();
                context.moveTo(x, y);
                started = true;
            } else {
                context.lineTo(x, y);
                context.stroke();
            }
        }
        
        init();
    }, false); }