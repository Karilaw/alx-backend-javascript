export default function uploadPhoto(filename) {
  return new Promise((_, reject) => {
    const errorMessage = `${filename} cannot be processed`;
    reject(new Error(errorMessage));
  });
}
