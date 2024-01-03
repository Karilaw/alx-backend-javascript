import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      return results.map((result) => ({
        status: result.status, // Access status from resolved/rejected Promise
        value: result.value,   // Access value or error from resolved/rejected Promise
      }));
    });
}
