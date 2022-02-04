import React from "react";

function Card() {
  return (
    <div>
      <div style={{ height: "150px", background: "green", margin: 3 }}>
        <div className="row">
          <div className="col-10">hhi</div>
          <div className="col-2">kj</div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              flex: 1,
            }}
          >
            <div
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end",
                background: "yellow",
                float: "right",
              }}
            >
              hi
            </div>
          </div>
        </div>
        <div className="row">
          <div>
            description sd sd s ds ds d s ds ds d s sd sd s d s d s d s d s d sd
            s d s s s d s d sd s dadffds dśd sdadsadśādśād d sd sad sd sa dsa d
            sa d sa d sa
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
