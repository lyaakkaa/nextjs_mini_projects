import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    cache: "no-store",
  })
  if (!res.ok) {
    return notFound()
  }
  return res.json();
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id) 
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo hic animi id laudantium dicta et ipsa distinctio, tempora culpa commodi non veritatis natus repellendus doloremque ducimus? Aspernatur distinctio illum aut, reiciendis dignissimos ex!</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/14941557/pexels-photo-14941557.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            ></Image>
            <span className={styles.username}>Tom Tom</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17133050/pexels-photo-17133050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=''
            fill={true}
            className={styles.image}
          ></Image>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam doloremque doloribus libero maxime, reiciendis qui neque possimus laudantium rem, magnam quo quaerat! Unde soluta corporis dolor saepe voluptatem? Voluptate accusantium odio maiores doloremque impedit sit voluptates molestiae dicta, eos facere ipsam rerum pariatur odit aperiam minima maxime aut laborum. Facere minus quaerat laudantium perferendis quidem eligendi est quia nihil iure. Officia debitis ab incidunt quaerat perferendis illo, iusto praesentium mollitia corrupti quibusdam dicta, inventore cum voluptatem pariatur, sint deleniti rem similique ea facere eligendi tempora voluptatum. Eius, distinctio possimus fugiat accusamus, ex numquam deserunt praesentium error illo totam vitae!
        </p>
      </div>
    </div>
  )
}

export default BlogPost