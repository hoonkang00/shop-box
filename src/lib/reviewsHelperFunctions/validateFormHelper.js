const validateFormHelper = (form, meta) => {
  let errorMsg = [];
  const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  if (form.rating === 0 || form.rating == null) {
    errorMsg.push("Overall Rating is required");
  }
  if (typeof form.recommend !== "boolean") {
    errorMsg.push("Recommended value is required");
  }
  if (
    Object.keys(form.characteristics).length === 0 ||
    Object.keys(form.characteristics).length !==
      Object.keys(meta.characteristics).length
  ) {
    errorMsg.push("All Characteristics are required");
  }
  if (form.summary === "" || form.summary === null) {
    errorMsg.push("Summary is required");
  }
  if (form.body === "" || form.body === null || form.body.length < 50) {
    errorMsg.push("Body is required");
  }
  if (form.nickname === "" || form.nickname === null) {
    errorMsg.push("Name is required");
  }
  if (form.email === "" || form.email === null) {
    errorMsg.push("Email is required");
  }
  if (!emailIsValid(form.email)) {
    errorMsg.push("Email format is incorrect");
  }
  if (errorMsg.length > 0) {
    alert(errorMsg.join("\n"));
    return false;
  } else {
    return true;
  }
};
export default validateFormHelper;
