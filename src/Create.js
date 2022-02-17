import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('arceus')
    const history = useHistory()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title, body, author}
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            history.push('/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                
                <label>Content</label>
                <textarea
                type="text"
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                />
                <label>Blog Author</label>
                <select 
                value = {author}
                required
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="arceus">arceus</option>
                    <option value="mario">mario</option>
                    <option value="ymir">ymir</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;