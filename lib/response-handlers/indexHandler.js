const colors = require('../data/colors')

const generateTopColor = (data) => {
  $('.top-color').html(`${data.value} (${data.color_count})`)
};

const generateSwatches = (text) => {
  let textArray = text.split(' ')
  let colorNames = Object.keys(colors)

  textArray.forEach(function(element) {
    if (colorNames.includes(element)) {
      let hexValue = colors[`${element}`]
      $('article.colorized-text').append(`<div class="swatch" style="background-color:${hexValue};"></div>`)
    }
  });
};

export { generateTopColor, generateSwatches };
