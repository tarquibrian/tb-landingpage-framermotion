import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import BlogImage from "../assets/blogImage1.jpg";
import BlogImage2 from "../assets/blogImage2.jpg";
import BlogImage3 from "../assets/blogImage3.jpg";
import "../styles/sections/Blogs.scss";
import Blog from "../components/Blog";

const Blogs = () => {
  return (
    <div className="blogs-container" id="blog">
      <div className="container">
        <div className="title-container">
          <Title title="Blogs" color="pink" lineCenter={true} />
          <p>Insights and advice from our experts.</p>
        </div>
        <div className="blogs">
          <Blog
            image={BlogImage}
            title="Top list of mistakes to avoid during MVP Development"
            subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, impedit rem. Quia molestiae, tenetur error praesentium dicta et nesciunt sunt quis numquam iusto in vero. Tempore laboriosam est maiores accusamus!"
          />
          <Blog
            image={BlogImage2}
            title="A day in life on an Engeniering manager"
            subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, impedit rem. Quia molestiae, tenetur error praesentium dicta et nesciunt sunt quis numquam iusto in vero. Tempore laboriosam est maiores accusamus!"
          />
          <Blog
            image={BlogImage3}
            title="How to build a strong remote work culture"
            subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, impedit rem. Quia molestiae, tenetur error praesentium dicta et nesciunt sunt quis numquam iusto in vero. Tempore laboriosam est maiores accusamus!"
          />
        </div>
        <div className="button-container">
          <Button content="View All" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
