const COHORT_NAME = '2306-FTB-ET-WEB-AM';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const fetchAllPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const allPosts = await response.json();
        console.log(allPosts);
        return allPosts;
    } catch (err) {
        console.error('Uh oh, trouble fetching posts!', err);
    }
};

export async function createPost(postData) {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function deletePost() {
    try {
        const response = await fetch(`${BASE_URL}`, {
            method: "DELETE",
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

