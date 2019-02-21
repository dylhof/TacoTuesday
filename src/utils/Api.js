export const fetchCall = async (url) => {
  const response = await fetch(url)
  if(response.ok) {
    const data = await response.json();
    return data
  } else {
    console.log(response.status)
    throw new Error(`Error fetching Tacos, code: ${response.status}`)
  }
}