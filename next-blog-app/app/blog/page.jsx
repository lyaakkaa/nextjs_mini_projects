import React from 'react';
import Link from 'next/link';

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next:{
            revalidate: 60
        }
    })
    if(!response.ok) throw new Error('Unable to fetch')
    return response.json();
}

export const metadata = {
    title: 'Blog | Next App',  
}

async function Blog(props) {
    const posts = await getData();
    return (
        <>
            <h1 className="text-center text-4xl">Blog Page</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
        
    );
}

export default Blog;