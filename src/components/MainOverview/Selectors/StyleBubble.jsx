import React from "react";
import { connect } from "react-redux";
import selectStyle from "../../../actions/selectStyle";
import trackElement from "../../../../api/trackElement";

const StyleBubble = ({ index, style, selected, useStyle, handleSelect }) => (
  <div className={useStyle ? "selected-bubble-hack" : ""}>
    <div
      style={{
        backgroundImage: `url('${style.photos[0].thumbnail_url}')`
      }}
      className="style-bubble"
      onClick={e => {
        handleSelect(index);
        trackElement(e);
      }}
    ></div>
    {selected && (
      <img
        src="./images/checkmark.png"
        alt="selected"
        className="check-circle"
      ></img>
    )}
  </div>
);

export default connect(
  null,
  dispatch => ({
    handleSelect: index => dispatch(selectStyle(index))
  })
)(StyleBubble);
