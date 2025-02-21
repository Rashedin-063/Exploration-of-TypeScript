const url = 'https://www.course-api.com/react-tours-project';

async function fetchData(url: string) {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.error(errMsg);
    // throw error;
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour: any) => {
  console.log(tour.name);
});

// return empty array
// throw error in catch block
// we are not setting state values in this function
  