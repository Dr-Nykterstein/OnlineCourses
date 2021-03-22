class HotelModel {
  constructor(
    name,
    latitude,
    longitude,
    location,
    description,
    starRating,
    rating,
    picture
  ) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.location = location;
    this.description = description;
    this.starRating = starRating;
    this.rating = rating;
    this.picture = picture;
  }
}

export default GetListHotelsInCity;
