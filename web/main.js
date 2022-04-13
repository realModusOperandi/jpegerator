let doPage = () => {
  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');

  let image = document.createElement('img');
  image.src =
    'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp';

  let result = document.getElementById('result');

  image.onload = () => {
    context.drawImage(image, 0, 0);
    try {
        result.src = canvas.toDataURL('image/jpeg');
    } catch (e) {
        if (e.name !== 'DOMException') {
            throw e;
        }
    }
    
    console.log('done');
  };

  console.log('hey');
};
