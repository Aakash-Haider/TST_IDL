// Imperative Approach
function processArrayImperative(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  // Example usage
  const impNumbers = [1, 2, 3, 4, 5];
  
  function squareNumber(num) {
    return num * num;
  }
  
  const impSquaredNumbers = processArrayImperative(impNumbers, squareNumber);
  console.log(impSquaredNumbers);

  


  // Declarative Approach
function processArrayDeclarative(arr, callback) {
    return arr.map(callback);
  }
  
  // Example usage
  const decNumbers = [1, 2, 3, 4, 5];
  
  function squareNumber(num) {
    return num * num;
  }
  
  const decSquaredNumbers = processArrayDeclarative(decNumbers, squareNumber);
  console.log(decSquaredNumbers);
  