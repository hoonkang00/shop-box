export default ratings => {
  let totalRatings = 0;
  let totalRatingsValue = 0;

  for (let stars in ratings) {
    totalRatingsValue += +stars * ratings[stars];
    totalRatings += +ratings[stars];
  }
  let averageRating = totalRatingsValue / totalRatings || 0;

  return averageRating;
};
