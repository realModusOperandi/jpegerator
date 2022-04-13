let doPage = () => {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');

  let image = document.createElement('img');

  let result = document.getElementById('result');

  image.setAttribute('crossOrigin', 'anonymous');
  image.src =
    'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp';

  image.onload = () => {
    canvas.width = 640;
    canvas.height = 480;
    context.drawImage(image, 0, 0, 640, 480);

    result.src = canvas.toDataURL('image/jpeg', 0.1);
  };
};
