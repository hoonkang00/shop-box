import React from "react";
import StyleBubble from "./StyleBubble.jsx";

export default function StyleBubbleArea({ styles, selectedStyleIndex }) {
  return (
    <div className="style-bubble-area">
      {styles && styles.length ? (
        styles.map((style, index) => (
          <StyleBubble
            key={style.style_id}
            style={style}
            selected={selectedStyleIndex === index}
            index={index}
            useStyle={
              selectedStyleIndex === index &&
              styles.length - index > styles.length % 4
            }
          />
        ))
      ) : (
        <div className="style-bubble"></div>
      )}
    </div>
  );
}
