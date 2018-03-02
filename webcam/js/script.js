var video;

function playV() {

    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    }).then(function(stream) {
        video = document.createElement('video');
        document.body.appendChild(video);
        video.src = URL.createObjectURL(stream);
        video.play();
        video.style.align("center");
    });  
}

var canvas, ctx;

      function init() {
        canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext('2d');
      }

      function snapshot() {
         // Draws current image from the video element into the canvas
        ctx.drawImage(video, 0,0, canvas.width, canvas.height);
      }
