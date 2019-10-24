import React from "react";
export default function StyleBubbleArea({ styles }) {
  console.log(styles);
  return (
    <div className="style-bubble-area">
      {styles && styles.length ? (
        styles.map(style => (
          <div className={style["default?"] === 1 ? "selected-bubble" : ""}>
            <div
              style={{
                "background-image": `url('${style.photos[0].thumbnail_url}')`
              }}
              className="style-bubble"
            ></div>
            {style["default?"] === 1 && (
              <img src="./images/checkmark.png" className="check-circle"></img>
            )}
            {style["default?"] === 1 &&
              console.log(style.photos[0].thumbnail_url)}
          </div>
        ))
      ) : (
        <div className="style-bubble"></div>
      )}
    </div>
  );
}
