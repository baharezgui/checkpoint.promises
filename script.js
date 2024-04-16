///////////////////////Task 1 //////////////////////////////

/*async function iterateWithAsyncAwait(array){
    for (const value of array){
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
}

const myArray = ['one', 'two', 'three', 'four', 'five'];
iterateWithAsyncAwait(myArray);


///////////////////////////Task 2 ////////////////////////////


async function awaitCall(){
    const fetchData = () => {
        return new Promise (resolve => {
            setTimeout(() => {
                resolve({ data: "This is the fetched data from the API"});
            }, 2000);
        });
    }; 

    const response = await fetchData ();
    console.log(response.data);
}
awaitCall();

//////////////////////////////////////Task 3 ///////////////////////////////////////

async function awaitCall() {
    try {
        const response = await fetchData();
    console.log(response.data);
    } catch (error) {
        console.error("Failed to fetch data from the API:", error.message);
    }
}

async function firstAsyncFunction() {
    await delay(1000);
    console.log("First async function completed");
}

async function secondAsyncFunction() {
    await delay(1000);
    console.log("Second async function completed");
}

async function thirdAsyncFunction() {
    await delay(1000);
    console.log("Third async function completed");
}

async function chainedAsyncFunctions() {
    await firstAsyncFunction();
    await secondAsyncFunction();
    await thirdAsyncFunction();
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


chainedAsyncFunctions();

/////////////////////////////////////////////Task 4 ///////////////////////////////////////////////////
*/

/*async function concurrentRequests() {
    try {
      
      const x = [result1, result2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/2'),
        fetch('https://random-data-api.com/api/v2/blood_types/054')
      ]);
  
      
      const data1 = await result1.json();
      const data2 = await result2.json();

  console.log(x);
      
    } catch (error) {
      
      console.error("Error:", error);
    }
  }
  
  
  concurrentRequests();*/

  /////////////////////////////////////////////////////////Task 5 /////////////////////////////////////////////////////////////////
  

  /*const urlsToFetch = [
    'https://jsonplaceholder.typicode.com/todos/0',
    'https://random-data-api.com/api/v2/blood_types/1544'
  ];
  
  // Function to fetch all of the URLs in parallel
  const fetchURLs = async (urls) => {
    try {
      const promises = urls.map(url => fetch(url));
  
      // Wait for all of the promises to resolve
      const responses = await Promise.all(promises);
  
      // Check for any failed responses
      for (const response of responses) {
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${response.url}. Status: ${response.status}`);
        }
      }
  
      // Extract JSON data from responses
      const data = await Promise.all(responses.map(response => response.json()));
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error}`);
    }
  };
  
  fetchURLs(urlsToFetch)
    .then(data => {
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });*/


    async function parallelCalls(urls) {
        try {
          // Fetch data from each URL concurrently
          const responses = await Promise.all(urls.map(url => fetch(url)));
      
          // Extract JSON data from responses
          const data = await Promise.all(responses.map(response => response.json()));
      
          // Log the responses
          console.log('Fetched data:', data);
        } catch (error) {
          // Handle errors if any
          console.error('Error fetching data:', error);
        }
      }
      
      // Example usage
      const urlsToFetch = [
        'https://jsonplaceholder.typicode.com/todos/0',
        'https://random-data-api.com/api/v2/blood_types/1544'
      ];
      
      parallelCalls(urlsToFetch);
  