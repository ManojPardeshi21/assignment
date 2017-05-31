
  window.onload = function(){
    console.log('window loaded...');
    this.renderCanvas();
  }
  function renderCanvas(){
    var canvas1 = document.getElementById("canvas1");
    var canvas2 = document.getElementById("canvas2");
    var context1 = canvas1.getContext('2d');
    var context2 = canvas2.getContext('2d')
    console.log("document laoded.." + context1 + context2);

      context1.beginPath();
      context1.rect(150, 10, 150, 80);
      context1.fillStyle = 'white';
      context1.fill();
      context1.lineWidth = 2;
      context1.strokeStyle = 'black';
      context1.stroke();

    context1.beginPath();
    context1.arc(75, 75, 50, 0, Math.PI * 2, true);
    context1.moveTo(100, 10);


  }
    

