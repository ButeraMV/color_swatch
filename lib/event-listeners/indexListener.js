import { getTopColor } from '../requests/colorSwatchRequests';
import { generateSwatches, generateColorPost } from '../response-handlers/indexHandler';

const onLoad = $( document ).ready(function() {
  getTopColor()

  $('button').on('click', function() {
    $('article.colorized-text').empty()
    generateSwatches($('textarea').val())
    generateColorPost($('textarea').val())
  });
});

export { onLoad };
