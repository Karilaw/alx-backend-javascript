export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call that takes 2 seconds to complete
    setTimeout(() => {
      // Replace this with your actual API call logic
      const apiResponse = { data: "This is the response from the API" };

      // Resolve the Promise with the API response
      resolve(apiResponse);
    }, 2000);
  });
}
