import { useState, useEffect } from "react";
import NewsItem from "./Newsitem";   // <-- make sure this path is correct

export const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error("API Error:", err));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-danger">News </span>
      </h2>

      {articles.map((news, index) => (
        <NewsItem key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};
