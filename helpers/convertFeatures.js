export default features => {
  return features.map(feature =>
    feature.value !== "null"
      ? feature.value + " " + feature.feature
      : feature.value
  );
};
