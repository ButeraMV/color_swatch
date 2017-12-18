import { getTopColor } from '../requests/colorSwatchRequests';

const onLoad = $( document ).ready(function() {
    getTopColor()
});

module.exports = {
  onLoad
}
