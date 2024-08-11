import { useContext } from "react";
import { useSearchParams } from "react-router-dom";

export default function SortByDropdown() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSortBy = (event) => {
    const sortBy = event.target.value;

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("sort_by", sortBy);

      return newParams;
    });
  };

  const handleOrder = (event) => {
    const newOrder = event.target.value;

    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("order", newOrder);

      return newParams;
    });
  };

  return (
    <div className="dropdown">
      <div className="custom-select">
        <select
          value={searchParams.get("sort_by") || "created_at"}
          onChange={handleSortBy}
        >
          <option value="created_at">Date created</option>
          <option value="comment_count">Comment count</option>
          <option value="votes">Votes</option>
        </select>
      </div>

      <select
        value={searchParams.get("order") || "desc"}
        onChange={handleOrder}
      >
        <option value="desc">Desc</option>
        <option value="asc">Asc</option>
      </select>
    </div>
  );
}
