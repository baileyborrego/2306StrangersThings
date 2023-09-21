const COHORT_NAME = '2209-FTB-ET-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const fetchAllPosts = async () => {
    try {
        const response = await fetch (`${BASE_URL}/posts`);
        const allPosts = await response.json();
        console.log(allPosts);
        return allPosts
    } catch (err) {
        console.error('Uh oh, trouble fetching posts!', err);
    }
};

export async function deletePost() {
    try {
      const response = await fetch(`${BASE_URL}`, {
        method: "DELETE"
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
};