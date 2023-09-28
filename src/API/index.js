const COHORT_NAME = '2306-FTB-ET-WEB-AM';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const fetchAllPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        const allPosts = await response.json();
        return allPosts;
    } catch (err) {
        console.error('Uh oh, trouble fetching posts!', err);
    }
};

export async function createPost(postData, token) {
    try {
        // Assuming 'token' contains the user's JWT unless we change it
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
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

export const createUser = async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
              username: username,
              password: password
            }
        })
        
      });
        const result = await response.json();
        console.log(result.data.token);
        sessionStorage.setItem = ("token", result.data.token)
        console.log(result)
        return result
    } catch (err) {
      console.error(err);
    }
}

export const login = async (username, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
              username: username,
              password: password
            }
          })
        });
        const result = await response.json();
        console.log(result);
        return result
      } catch (err) {
        console.error(err);
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

export async function fetchMessages(postId, token) {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}messages`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data.success) {
        return data.data.messages;
      } else {
        console.error('API request failed:', data.error);
        return [];
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  }

export async function sendMessageToPost(postId, messageContent, token) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content: messageContent
                }
            })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteMessage(messageId, token) {
    try {
      const response = await fetch(`${BASE_URL}/messages/${messageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error deleting message:', error);
      throw error;
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
