export const loadPosts = async () => {
  const postsRes = fetch('https://jsonplaceholder.typicode.com/posts')
  const fotosRes = fetch('https://jsonplaceholder.typicode.com/photos')

  const [posts, photos] = await Promise.all([postsRes, fotosRes])

  const postsJson = await posts.json()
  const photosJson = await photos.json()

  const postsAndPhotos = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url }
  });

  return postsAndPhotos
}