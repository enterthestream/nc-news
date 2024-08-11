import { createContext, useCallback, useEffect, useState } from "react";
import { getArticles } from "../api";
import { useSearchParams } from "react-router-dom";
import { getSearchParamsValues } from "../utils";

export const ArticlesContext = createContext();

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();

  const fetchArticles = useCallback(() => {
    const { topic, sortBy, order } = getSearchParamsValues(searchParams);

    getArticles(topic, sortBy, order).then((fetchedArticles) => {
      setArticles(fetchedArticles);
    });
  });

  useEffect(() => {
    fetchArticles();
  }, [searchParams]);

  return (
    <ArticlesContext.Provider
      value={{
        articles,
        setArticles,
        fetchArticles,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};
