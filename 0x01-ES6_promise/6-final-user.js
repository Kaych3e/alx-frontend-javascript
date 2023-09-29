import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfilesignup(
  firstName,
  lastName,
  fileName,
) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const array = [];
    for (const item of values) {
      array.push({ status: item.status, value: item.value || item.reason });
    }
    return array;
  });
}
