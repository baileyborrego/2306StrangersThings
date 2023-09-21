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
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "DELETE",
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function editPost(postId, updatedData) {
  try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
          method: 'PATCH', // Use the PATCH HTTP method
          headers: {
              'Content-Type': 'application/json', // Set the content type to JSON
          },
          body: JSON.stringify(updatedData), // Convert the updated data to JSON and send it in the body
      });

      if (response.ok) {
          const editedPost = await response.json();
          console.log('Post successfully edited:', editedPost);
          return editedPost;
      } else {
          console.error('Failed to edit post:', response.statusText);
          return null; // can handle the error as needed
      }
  } catch (err) {
      console.error('Uh oh, trouble editing the post!', err);
      return null; // can handle the error as needed
  }
}

// Usage example:
const postIdToUpdate = ''; // Replace with the ID of the post you want to update
const updatedData = {
  title: '', // Replace with the updated title
  description: '', // Replace with the updated description
  price: '', // Replace with the updated price
};

editPost(postIdToUpdate, updatedData)
  .then((editedPost) => {
      if (editedPost) {
          // Handle success, you can log the updated post or perform other actions
          console.log('Post updated successfully:', editedPost);
      } else {
          // Handle the case where the update failed
          console.error('Failed to update the post.');
      }
  })
  .catch((error) => {
      console.error('An error occurred while updating the post:', error);
  });