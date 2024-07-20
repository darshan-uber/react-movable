import * as React from "react";
import { List, arrayMove } from "../src/index";
import { buttonStyles, HandleIcon } from "./Handle";

const ScrollingContainerHandle: React.FC = () => {
  const [items, setItems] = React.useState(
    Array.from(Array(100).keys()).map((val) => `Item ${val}`),
  );

  return (
    <div
      style={{
        maxWidth: "332px",
        margin: "0px auto",
        backgroundColor: "#F7F7F7",
        padding: "3em",
      }}
    >
      <List
        values={items}
        onChange={({ oldIndex, newIndex }) =>
          setItems(arrayMove(items, oldIndex, newIndex))
        }
        renderList={({ children, props, isDragged }) => (
          <ul
            {...props}
            style={{
              padding: "1em",
              cursor: isDragged ? "grabbing" : undefined,
              height: 600,
              overflowY: "scroll",
              overflowX: "hidden",
              borderTop: "5px solid #AAA",
              borderBottom: "5px solid #AAA",
            }}
          >
            {children}
          </ul>
        )}
        renderItem={({ value, props, isDragged, isSelected }) => (
          <li
            {...props}
            key={props.key}
            style={{
              ...props.style,
              padding: "1.5em",
              margin: "0.5em 0em",
              listStyleType: "none",
              cursor: isDragged ? "grabbing" : "grab",
              border: "2px solid #CCC",
              boxShadow: "3px 3px #AAA",
              color: "#333",
              borderRadius: "5px",
              fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
              backgroundColor: isDragged || isSelected ? "#EEE" : "#FFF",
            }}
          >
            <button
              data-movable-handle
              style={{
                ...buttonStyles,
                cursor: isDragged ? "grabbing" : "grab",
                marginRight: "3em",
              }}
              tabIndex={-1}
            >
              <HandleIcon />
            </button>
            {value}
          </li>
        )}
      />
    </div>
  );
};

export default ScrollingContainerHandle;
