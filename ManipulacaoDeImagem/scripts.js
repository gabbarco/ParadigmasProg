let canvasOriginal = document.getElementById("imagemOriginal");
let ctxOriginal = canvasOriginal.getContext("2d");
let image = new Image();
image.src = "galinha.jpg";

image.onload = function() {
  canvasOriginal.width = image.width;
  canvasOriginal.height = image.height;
  ctxOriginal.drawImage(image, 0, 0, canvasOriginal.width, canvasOriginal.height);
};

function horizontal() {
        let imageData = ctxOriginal.getImageData(0, 0, canvasOriginal.width, canvasOriginal.height);
        let pixels = imageData.data;
        for (let y = 0; y < canvasOriginal.height; y++) {
            for (let x = 0; x < canvasOriginal.width / 2; x++) {
                let i = (y * canvasOriginal.width + x) * 4;
                let r = pixels[i];
                let g = pixels[i + 1];
                let b = pixels[i + 2];
                let a = pixels[i + 3];
                let horizontal = (y * canvasOriginal.width + (canvasOriginal.width - x - 1)) * 4;
                pixels[i] = pixels[horizontal];
                pixels[i + 1] = pixels[horizontal + 1];
                pixels[i + 2] = pixels[horizontal + 2];
                pixels[i + 3] = pixels[horizontal + 3];
                pixels[horizontal] = r;
                pixels[horizontal + 1] = g;
                pixels[horizontal + 2] = b;
                pixels[horizontal + 3] = a;
            }
        }
        ctxOriginal.putImageData(imageData, 0, 0);
}

    function vertical() {
        let imageData = ctxOriginal.getImageData(0, 0, canvasOriginal.width, canvasOriginal.height);
        let pixels = imageData.data;
        for (let y = 0; y < canvasOriginal.height / 2; y++) {
            for (let x = 0; x < canvasOriginal.width; x++) {
                let i = (y * canvasOriginal.width + x) * 4;
                let r = pixels[i];
                let g = pixels[i + 1];
                let b = pixels[i + 2];
                let a = pixels[i + 3];
                let vertical = ((canvasOriginal.height - y - 1) * canvasOriginal.width + x) * 4;
                pixels[i] = pixels[vertical];
                pixels[i + 1] = pixels[vertical + 1];
                pixels[i + 2] = pixels[vertical + 2];
                pixels[i + 3] = pixels[vertical + 3];
                pixels[vertical] = r;
                pixels[vertical + 1] = g;
                pixels[vertical + 2] = b;
                pixels[vertical + 3] = a;
            }
        }
        ctxOriginal.putImageData(imageData, 0, 0);
    }

    function rotacionar() {
        let imageData = ctxOriginal.getImageData(0, 0, canvasOriginal.width, canvasOriginal.height);
        let pixels = imageData.data;
        let newImageData = ctxOriginal.createImageData(imageData.height, imageData.width);
        let newPixels = newImageData.data;

        for (let i = 0; i < pixels.length; i += 4) {
          let r = pixels[i];
          let g = pixels[i+1];
          let b = pixels[i+2];
          let a = pixels[i+3];

          let x = (i/4) % imageData.width;
          let y = Math.floor(i / (imageData.width * 4));

          const novoX = y;
          const novoY = imageData.width - x - 1;
          const novoI = (novoX + novoY * imageData.height) * 4;
          
          newPixels[novoI] = r;
          newPixels[novoI+1] = g;
          newPixels[novoI+2] = b;
          newPixels[novoI+3] = a;
        }
        canvasOriginal.width = imageData.height;
        canvasOriginal.height = imageData.width;
        ctxOriginal.putImageData(newImageData, 0, 0);
}

  function reduzir() {
        let imageData = ctxOriginal.getImageData(0, 0, canvasOriginal.width, canvasOriginal.height);
        let pixels = imageData.data;
        let imageReduce = ctxOriginal.createImageData(canvasOriginal.width,canvasOriginal.height)
        let imageReduce_data = imageReduce.data

        for (let x = 0; x < canvasOriginal.width/2; x++) {
          for (let y = 0; y < canvasOriginal.height/2; y++) {
            let novoX = x * 2;
            let novoY = y * 2;
            let i = ((novoY * imageData.width) + novoX) * 4;
            let novoI = ((y*canvasOriginal.width)+x)*4;

            imageReduce_data[novoI] = pixels[i];
            imageReduce_data[novoI+1] = pixels[i+1];
            imageReduce_data[novoI+2] = pixels[i+2];
            imageReduce_data[novoI+3] = pixels[i+3];
          }
        }
        imageReduce.data = imageReduce_data;
        canvasOriginal.width = canvasOriginal.width/2;
        canvasOriginal.height = canvasOriginal.height/2;
        ctxOriginal.putImageData(imageReduce, 0,0);
}