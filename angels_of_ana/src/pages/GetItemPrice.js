const GetItemPrice = numItems =>
  (Math.round(numItems * 1.5 * 100) / 100).toFixed(2);

export default GetItemPrice;