const COHORT_NAME = '2209-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const fetchAllPosts = async () => {
    try {
        const response = await fetch (`${BASE_URL}/posts`);
        const allPosts = await response.json();
        // console.log(allPosts);
        return allPosts
    } catch (err) {
        console.error('Uh oh, trouble fetching posts!', err);
    }
};

export const fetchToken = async (username, password) => {
  
    try {
      const response = await fetch(`${BASE_URL}/users/registerLogin`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
              username: `${username}`,
              password: `${password}`
            }
        })
      });
        const result = await response.json();
        console.log(username, password);
        sessionStorage.token = result.data.token;
        return localStorage.token;
    } catch (err) {
      console.error(err);
    }
  }