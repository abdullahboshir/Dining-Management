const BASE_URL = 'http://localhost:5000/'


// fetch for local api 
export const fetchLocalDatas = async (localApiUrl) => {
    try {
      const response = await fetch(localApiUrl);
      const data = await response.json();

      if (!response.ok) {
        console.error('Response Error:', response.status, response.statusText);
        throw new Error('Request failed with status ' + response.status);
      };

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error.message;
    }
  };



  
// fetch for local api 
export const fetchGlobalDatas = async (newData, url, methodType) => {
      try {
        const requestOptions = {
          method: methodType,
          headers: {
            'Content-Type': 'application/json'
          }
        };
  
        if (newData !== null && methodType !== 'GET') {
          requestOptions.body = JSON.stringify(newData);
      }
  
        const response = await fetch(`${BASE_URL}${url}`, requestOptions);
  
      if (!response.ok) {
        // Handle 400 status code and parse the error message from the response
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Request failed with status ' + response.status;
        console.error('Response Error:', response.status, errorMessage);
        throw new Error(errorMessage);
      }
  
        const data = await response.json();
        return data;
  
      } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error.message;
      }
    };





// // fetch for local api 
// export const fetchGlobalDatas = async (newData, url, method,) => {
//     try {
//       const response = await fetch(`${BASE_URL}${url}`, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newData)
//     });

//     if (!response.ok) {
//       // Handle 400 status code and parse the error message from the response
//       const errorData = await response.json();
//       const errorMessage = errorData.message || 'Request failed with status ' + response.status;
//       console.error('Response Error:', response.status, errorMessage);
//       throw new Error(errorMessage);
//     }


//       const data = await response.json();
//       return data;

//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//       throw error.message;
//     }
//   };