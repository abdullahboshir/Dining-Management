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
      throw error;
    }
  };




// fetch for local api 
export const fetchGlobalDatas = async (newData, url, method,) => {
    try {
      const response = await fetch(`${BASE_URL}${url}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    });

      if (!response.ok) {
        console.error('Response Error:', response.status, response.data);
        throw new Error('Request failed with status ' + response.status);
      };

      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };