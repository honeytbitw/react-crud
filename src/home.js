import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    // const [blogs, setBlogs] = useState(null)
  
    // const handleDelete = (id) => {
    //   const newBlogs = blogs.filter(blog => blog.id !== id);
    //   setBlogs(newBlogs);
    // }
    const {data: blogs} = useFetch('http://localhost:8000/blogs')
    return (  
        <div className="home">
        {/* <BlogList blogs={blogs}/>             */}
        {blogs && <BlogList blogs={blogs} title="Blogs"/>}
        </div>
    );
}
 
export default Home;