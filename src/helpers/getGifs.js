export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Xyzy42O6iJkGaXmmtyZZddh06S1wQM9J&q=${category}&limit=10`

  const response = await fetch(url)

  const { data } = await response.json()

  const gifs = data.map( (img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs
}