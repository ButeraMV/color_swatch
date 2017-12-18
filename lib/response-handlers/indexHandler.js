const colors = require('../data/colors')
const colorNames = Object.keys(colors)

const generateTopColor = (data) => {
  $('.top-color').html(`${data.value} (${data.color_count})`)
};

const generateSwatches = (text) => {
  let textArray = text.split(' ')
  let uniqueTextArray = Array.from(new Set(textArray))

  uniqueTextArray.forEach(function(element) {
    checkForMatch(element)
  });
};

const checkForMatch = (element) => {
  if (colorNames.includes(element)) {
    let hexValue = colors[`${element}`]
    $('article.colorized-text').append(`<div class="swatch" style="background-color:${hexValue};"></div>`)
  }
}

export { generateTopColor, generateSwatches };
