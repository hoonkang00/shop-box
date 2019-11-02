import { connect } from "react-redux";
import StyleBubbleArea from "../components/MainOverview/StyleBubbleArea.jsx";

export default connect(
  state => ({
    styles: state.productStyles,
    selectedStyleIndex: state.selectedStyleIndex
  }),
  null
)(StyleBubbleArea);
