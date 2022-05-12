import PostItem from "./post-items";
import classes from './post.module.css';

function PostGrid(props){
    const {posts} = props;
    return <>
        <ul className={classes.ulContainer}>
            {posts.map(post => <PostItem key={post.slug} post={post} />)}
        </ul>
    </>
}
export default PostGrid;
