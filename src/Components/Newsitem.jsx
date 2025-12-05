import image from '../assets/news.jpg'

const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src?src:image} style={{height:"200px",width:"320px"}} className="card-img-top" alt="news" />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 40) : "Breaking News"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Updates: What is going on today? Check out here."}
        </p>
        <a href={url} className="btn btn-primary" target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
