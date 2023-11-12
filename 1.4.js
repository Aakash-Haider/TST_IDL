const always404Handler = {
    get: function(target, prop) {
      return "404";
    }
  };
  
  const always404Object = new Proxy({}, always404Handler);
  
  // Now, no matter what property you try to access, it will always return "404"
  console.log(always404Object.anyProperty); // Output: "404"
  console.log(always404Object.someMethod()); // Output: "404"