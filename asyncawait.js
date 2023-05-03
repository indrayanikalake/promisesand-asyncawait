let lastActivityTime = null;

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

const posts = [];

async function createPost(title) {
  const post = { title };
  posts.push(post);
  await Promise.all([
    updateLastUserActivityTime(),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(post);
      }, 1000);
    })
  ]);
}

async function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}

async function main() {
  try {
    await createPost("Post 1");
    console.log("Posts:", posts);
    console.log("Last activity time:", lastActivityTime);
    await createPost("Post 2");
    console.log("Posts:", posts);
    console.log("Last activity time:", lastActivityTime);
    const deletedPost = await deletePost();
    console.log("Deleted post:", deletedPost);
    console.log("Posts:", posts);
  } catch (error) {
    console.error(error);
  }
}

main();