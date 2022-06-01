import React from "react";
import {
  ScrollMenu,
  VisibilityContext,
} from "@ramirezcgn/react-horizontal-scrolling-menu";

import "./App.css";

const getItems = () =>
  Array(25)
    .fill(0)
    .map((_, ind) => ({ id: `${ind}` }));

function Arrow({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        opacity: disabled ? "0" : "1",
        height: "80px",
        outline: "none",
        background: "none",
        border: "none",
        fontWeight: "900",
      }}
    >
      {children}
    </button>
  );
}
function App() {
  const [items] = React.useState(getItems);

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map(({ id, i }) => (
        <Card
          itemId={id} // NOTE: itemId is required for track items
          itemClassName={i % 2 ? "odd" : "even"} // Optional custom class for item container element
          title={id}
          key={id}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      {`<`}
    </Arrow>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
      {`>`}
    </Arrow>
  );
}

function Card({ itemId, title }) {

  return (
    <div
      style={{
        width: "160px",
      }}
      tabIndex={0}
    >
      <nav className="nav">
        <button className="nav-item is-active" active-color="orange">
          Tab-{itemId}
        </button>
        <span className="nav-indicator"></span>
      </nav>
    </div>
  );
}

export default App;
