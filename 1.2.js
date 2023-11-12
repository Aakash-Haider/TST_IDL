// Assuming that we have a function that returns a promise, such as fetching data from an API
function fetchData() {
    return new Promise((resolve, reject) => {
      // Asynchronous operation, like fetching data
      setTimeout(() => {
        const data = { /* some data */ };
        resolve(data);
      }, 1000);
    });
  }
  
  // Log order to start fetching data
  console.log('Order: Start fetching data');
  
  // Use the promise and log orders accordingly
  fetchData()
    .then(data => {
      console.log('Order: Data fetched successfully', data);
      // Process the data or perform additional actions
    })
    .catch(error => {
      console.error('Order: Error fetching data', error);
      // Handle errors or perform fallback actions
    });
  
  // Log order indicating that the process is asynchronous
  console.log('Order: Asynchronous operation initiated');
  