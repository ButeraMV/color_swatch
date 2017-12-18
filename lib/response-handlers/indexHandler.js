const generateTopColor = (data) => {
  $('.top-color').html(`${data.value} (${data.color_count})`)
};

export { generateTopColor };
