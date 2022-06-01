import React from "react";
import { Tabs } from "antd";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "./App.css";
const { TabPane } = Tabs;

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
        height: "40px",
        outline: "none",
        background: "none",
        border: "none",
        fontWeight: "900"
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
      {items.map(({ id }) => (
        <Tabs style={{ width: "100px" }} tabIndex={0} itemId={id}>
          <TabPane tab={`Tab-${id}`} key={id}>
          </TabPane>
        </Tabs>
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

export default App;
