import { useState } from "react";
import cls from "./ChildList.module.scss";

const ChildList = ({ children, searchText, sortBy, setSortBy }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedChildren = [...children].sort((a, b) => {
    const comparison = a[sortBy].localeCompare(b[sortBy]);
    return sortOrder === "asc" ? comparison : -comparison;
  });
  
  const filteredChilds = sortedChildren.filter((child) =>
    child.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSortOrderToggle = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <div className={cls.sort_options_block}>
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="name">Sort by name</option>
          <option value="key">Sort by key</option>
        </select>
        <button
          className={cls.sort_order_toggle}
          onClick={handleSortOrderToggle}
        >
          {sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>
      {filteredChilds.map((child) => (
        <div className={cls.child_block} key={child.key}>
          {child.name}
        </div>
      ))}
    </>
  );
};
export default ChildList;
