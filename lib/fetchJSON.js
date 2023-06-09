const fetchJSON = (...args) => {
    return fetch(...args).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  };
  
  export default fetchJSON;
  