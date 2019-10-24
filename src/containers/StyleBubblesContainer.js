import { connect } from "react-redux";
import StyleBubbleArea from "../components/Product Details/StyleBubbleArea.jsx";

export default connect(
  state => ({
    styles: state.productStyles
  }),
  null
)(StyleBubbleArea);
