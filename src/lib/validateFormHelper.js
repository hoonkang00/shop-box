import React from "react";

const validateFormHelper = ({ form }) => {
  emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  let errorMsg = [];
  if (form.rating === 0 || form.rating == null) {
    errorMsg.push("Overall Rating is required");
  }
  //   if(form.recommend)
  if (
    Object.keys(form.characteristics) === 0 ||
    Object.keys(form.characteristics).length !== Object.keys(meta).length
  ) {
    errorMsg.push("All Characteristics are required");
  }
  if (form.nickname === "" || form.nickname == null) {
    errorMsg.push("Name is required");
  }
  if (form.email === "" || form.email == null) {
    errorMsg.push("Email is required");
  }
  if (!this.emailIsValid(form.email)) {
    errorMsg.push("Email format is incorrect");
  }
  if (errorMsg.length > 0) {
    alert(errorMsg.join("\n"));
  }
};
export default validateFormHelper;
