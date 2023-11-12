function flattenArray(arr) {
    let result = [];
  
    function flattenHelper(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flattenHelper(arr[i]);
        } else {
          result.push(arr[i]);
        }
      }
    }
  
    flattenHelper(arr);
    return result;
  }
  
  const nestedArray = [4, [[5], [6, [7], 8], 9, 10]];
  const flatArray = flattenArray(nestedArray);
  
  console.log(flatArray);