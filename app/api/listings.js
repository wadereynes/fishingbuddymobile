import client from './client'

// const endpoint = '/listings'
const endpoint = '/products'

const getListings = () => client.get(endpoint)

const addListing = (listing, onUploadProgress) => {
  const data = new FormData()
  data.append('name', listing.name)
  data.append('price', listing.price)
  data.append('category', listing.category)
  // data.append('image', listing.image)
  data.append('description', listing.description)

  listing.image.forEach((image, index) =>
    data.append('image', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    })
  )

  // data.append({
  //   name: 'image' + index,
  //   type: 'image/jpeg',
  //   uri: image,
  // })

  // data.append('title', listing.title)
  // data.append('price', listing.price)
  // data.append('categoryId', listing.category.value)
  // data.append('description', listing.description)

  // listing.images.forEach((image, index) =>
  //   data.append('images', {
  //     name: 'image' + index,
  //     type: 'image/jpeg',
  //     uri: image,
  //   })
  // )

  if (listing.location)
    data.append('location', JSON.stringify(listing.location))

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  })
}

export default {
  addListing,
  getListings,
}
