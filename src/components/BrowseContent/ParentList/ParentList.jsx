import cls from "./ParentList.module.scss";

const ParentList = ({ parents, onParentSelect }) => {
  return (
    <>
      {parents.map((parent) => (
        <div
          key={parent.key}
          className={cls.parent_block}
          onClick={() => onParentSelect(parent)}
        >
          {parent.name}
        </div>
      ))}
      
    </>
  );
};

export default ParentList;
