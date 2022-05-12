import Image from "next/image";
import Link from "next/link";
import classes from './post.module.css';

function PostItem(props) {
  const { title, image, date, excerpt, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/image/posts/${slug}/${image}`;
  console.log("image", imagePath)
  const linkPath = `/posts/${slug}`
  return (
    <li className={classes.liContainer}>
      <Link href={linkPath}>
        <a>
          <div>
              <Image src={imagePath} alt="here is the images" width={50} height={50}/>
          </div>
          <div>
             <h3>{title}</h3>
             <time>{formattedDate}</time>
             <p>{excerpt}</p>
          </div>

        </a>
      </Link>
    </li>
  );
}
export default PostItem;
