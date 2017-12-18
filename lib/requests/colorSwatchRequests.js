import { generateTopColor } from '../response-handlers/indexHandler';

const baseUrl = 'https://color-swatch-api.herokuapp.com/';

const getTopColor = () => {
  fetch(`${baseUrl}/api/v1/top_color`)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json().then(function(data) {
          generateTopColor(data)
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

export { getTopColor };
