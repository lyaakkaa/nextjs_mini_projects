import React from "react";

export const generateMetadata = (id) => {
  return {
    title: `Blog | Next App ${id}`,
  };
};

async function getData(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        next:{
            revalidate: 60
        }
    })
    return response.json();
}

async function Post({ params: { id } }) {
  const metadata = generateMetadata(id);
  const post = await getData(id)
//   console.log(post);
  return (
    <>
      <title>{metadata.title}</title>
      <h1 className="text-center text-2xl font-bold text-red-500">
        {post.title.toUpperCase()}
      </h1>

      <p>{post.body}</p>
    </>
  );
}

export default Post;
