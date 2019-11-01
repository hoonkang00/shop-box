import { connect } from "react-redux";
import StyleBubbleArea from "../components/ProductDetails/StyleBubbleArea.jsx";

export default connect(
  state => ({
    styles: state.productStyles,
    selectedStyleIndex: state.selectedStyleIndex
  }),
  null
)(StyleBubbleArea);
