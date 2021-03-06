import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails(){
 
    const {id} = useParams()
    const {data: blog} = useFetch('http://localhost:8000/blogs/'+id)
    const history = useHistory()
    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method:'DELETE'
        })
        .then(()=>{
            history.push('/')
        })
    }
    return (  
        <div className="blog-details">
            <h2>Blog details - {id}</h2>
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;