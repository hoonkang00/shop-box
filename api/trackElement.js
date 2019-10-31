import axios from "axios";
import { baseUrl } from "./config";

export default event => {
  if (event.target.className !== undefined) {
    const url = baseUrl + "interactions/";
    const data = {
      element: event.target.className,
      widget: event.target.className,
      time: new Date().toString()
    };
    axios.post(url, data).catch();
  }
};
