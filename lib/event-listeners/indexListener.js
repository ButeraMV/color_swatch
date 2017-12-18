import { getTopColor } from '../requests/colorSwatchRequests';
import { generateSwatches } from '../response-handlers/indexHandler';

const onLoad = $( document ).ready(function() {
  getTopColor()

  $('button').on('click', function() {
    $('article.colorized-text').empty()
    generateSwatches($('textarea').val())
  });
});

export { onLoad };
