const jimp = require('jimp');

const resizeImage = async () => {
  // Read the image.
  const image = await jimp.read('../public/img.jpg');

  // Resize the image to width 75 and auto height.
  await image.quality(60).resize(75, jimp.AUTO);

  // Save and overwrite the image
  await image.writeAsync('../public/.png');
};

resizeImage();
