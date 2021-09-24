import React from "react";
import { ReactComponent as ThumbUp } from "../../resources/thumb_up.svg";
import { ReactComponent as Share } from "../../resources/share.svg";
import { ReactComponent as View } from "../../resources/remove_red_eye.svg";
function BottomSheet({ card, close }) {
  const [position, setPosition] = React.useState("-100%");
  React.useEffect(() => {
    setPosition("0px");
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: 610,
        height: 300,
        // minWidth:300,
        bottom: position,
        transition: "0.3s ease-in-out",
        backgroundColor: "white",
        textAlign: "center",
        padding: 10,
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      className="bottom_sheet"
      onClick={close}
    >
      <div
        style={{
          borderBottom: "2px solid black",
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{card.event_name}</div>
        <div style={{ cursor: "pointer" }}>X</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: 300,
        }}
      >
        <div style={{ display: "felx", flexDirection: "column" }}>
          <div
            style={{ textAlign: "center", fontSize: "20px", marginBottom: 10 }}
          >
            {card.likes}
          </div>
          <ThumbUp />
        </div>
        <div style={{ display: "felx", flexDirection: "column" }}>
          <div
            style={{ textAlign: "center", fontSize: "20px", marginBottom: 10 }}
          >
            {card.shares}
          </div>
          <Share />
        </div>
        <div style={{ display: "felx", flexDirection: "column" }}>
          <div
            style={{ textAlign: "center", fontSize: "20px", marginBottom: 10 }}
          >
            {card.views}
          </div>
          <View />
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;
