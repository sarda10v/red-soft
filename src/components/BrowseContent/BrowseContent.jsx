import React, { useState } from "react";
import ChildList from "./ChildList/ChildList";
import ParentList from "./ParentList/ParentList";
import cls from "./BrowseContent.module.scss";

const BrowseContent = ({ data }) => {
  const [selectedParent, setSelectedParent] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const handleParentSelect = (parent) => {
    setSelectedParent(parent);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <div className={cls.wrapper}>
        <div className={cls.parentList}>
          <h1>Parent</h1>
          <ParentList
            parents={data[0].children}
            onParentSelect={handleParentSelect}
            searchText={searchText}
          />
        </div>
        <div className={cls.childList}>
          <h1>Child</h1>
          <input
            type="text"
            value={searchText}
            placeholder="Search"
            onChange={handleSearchTextChange}
          />
          {selectedParent && (
            <ChildList
              children={selectedParent.children}
              sortBy={sortBy}
              setSortBy={setSortBy}
              searchText={searchText}
            />
          )}
          {!selectedParent?.children.length ? (
            <div className={cls.empty}>empty</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BrowseContent;
