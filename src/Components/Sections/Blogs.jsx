import "./blogs.css";

const Blogs = () => {
  return (
    <div className="blogparent">
      <div className="blogwrapper">
        <div className="latestblog">
          <h1>Latest blogs</h1>
        </div>
        <div className="celebs">
          <div className="stan">
            <img
              src="https://themewagon.github.io/coloshop/images/blog_1.jpg"
              alt="loading"
            />
          </div>
          <div className="stan">
            <img
              src="https://themewagon.github.io/coloshop/images/blog_2.jpg"
              alt="loading"
            />
          </div>
          <div className="stan">
            <img
              src="https://themewagon.github.io/coloshop/images/blog_3.jpg"
              alt="loading"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
