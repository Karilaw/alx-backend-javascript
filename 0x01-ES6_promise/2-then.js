export default function handleResponseFromAPI(promise) {
  // Chain three handlers using .then() and .catch()
  return promise
    .then(() => {
      console.log('Got a response from the API'); // Log for every resolution
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      console.log('Got a response from the API'); // Log for every resolution, even rejections
      return new Error(); // Return empty Error object for rejections
    })
    .then((result) => {
      // Ensure a consistent response format for both resolutions and rejections
      return { status: result instanceof Error ? 500 : 200, body: result };
    });
}
