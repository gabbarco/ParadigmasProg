function gerarContorno() {
    // Obter a imagem de chroma key
    const imagem = document.getElementById('imagem');

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = imagem.width;
    canvas.height = imagem.height;
    ctx.drawImage(imagem, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Cor do chroma key (verde) em RGBA
    const verdeR = 0;
    const verdeG = 255;
    const verdeB = 0;
    const verdeA = 255;

    // Cor do contorno em RGBA
    const contornoR = 255;
    const contornoG = 0;
    const contornoB = 0;
    const contornoA = 255;

    // Definir o contorno
    for (let i = 0; i < data.length; i += 4) {
      if (data[i] === verdeR && data[i + 1] === verdeG && data[i + 2] === verdeB && data[i + 3] === verdeA) {
        data[i] = contornoR;
        data[i + 1] = contornoG;
        data[i + 2] = contornoB;
        data[i + 3] = contornoA;
      }
    }

    // Desenhar a imagem com o contorno no elemento de canvas
    ctx.putImageData(imageData, 0, 0);
    console.log('Finalizado')

    // Substituir a imagem
    const novaImagem = new Image();
    novaImagem.src = canvas.toDataURL();
    novaImagem.alt = 'Imagem com Contorno';
    imagem.parentNode.replaceChild(novaImagem, imagem);
  }