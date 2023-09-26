// mostly done i think, may be a slight work in progress still
const COHORT_NAME = '2306-FTB-ET-WEB-AM';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const makePost = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
          willDeliver: true
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }
}