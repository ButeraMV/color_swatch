import { postColorRequest } from '../requests/colorSwatchRequests'

const colors = require('../data/colors')
const colorNames = Object.keys(colors)

const generateTopColor = (data) => {
  $('.top-color').html(`${data.value} (${data.color_count})`)
};

const generateSwatches = (text) => {
  let uniqueTextArray = Array.from(new Set(text.split(' ')))

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

const generateColorPost = (text) => {
  let textArray = text.split(' ')

  textArray.forEach(function(element) {
    if (colorNames.includes(element)) {
      postColorRequest(element)
    }
  })
}

export { generateTopColor, generateSwatches, generateColorPost };
