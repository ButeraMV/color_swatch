import { getTopColor } from '../requests/colorSwatchRequests';

const onLoad = $( document ).ready(function() {
    getTopColor()
});

export { onLoad };
