const colors = require('../data/colors')

const generateTopColor = (data) => {
  $('.top-color').html(`${data.value} (${data.color_count})`)
};

const generateSwatches = (text) => {
  let textArray = text.split(' ');

}

export { generateTopColor, generateSwatches };
