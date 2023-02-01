import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);
const addListings = listing => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('cetegoryId', listing.cetegoryId);
  data.append('description', listing.description);
  data.append('title', listing.title);

  listing.images.forEach((image, index) => 
    data.append('images', {
      name : 'image' + index,
      type: 'image/jpeg',
      uri: image,
    }));
    if(listing.location)
      data.append('location', JSON.stringify(listing.location))
    return client.post(endpoint, data, {
      onUploadProgress: progress => console.log(progress)
    })
}

export default {
    getListings,
    addListings,
  };
  