
  window.onload = function(){
    
    this.renderCanvas();
  }
  function renderCanvas(){
    var canvas1 = document.getElementById("canvas1");
    var canvas2 = document.getElementById("canvas2");
    var context1 = canvas1.getContext('2d');
    var context2 = canvas2.getContext('2d')
   

      context1.beginPath();
      context1.rect(150, 10, 150, 80);
      context1.fillStyle = 'white';
      context1.fill();
      context1.lineWidth = 2;
      context1.strokeStyle = 'black';
      context1.stroke();

    context1.beginPath();
    context1.arc(500, 60, 50, 0, 2 * Math.PI);
    context1.stroke();



  }
    

