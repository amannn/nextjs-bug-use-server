import {use} from 'react';

export default async function Index() {
  // ✅ Works
  // return await fetch('https://dog.ceo/api/breeds/image/random').then(
  //   (response) => response.status
  // );

  // ❌ Doesn't work
  return use(
    fetch('https://dog.ceo/api/breeds/image/random').then(
      (response) => response.status
    )
  );
}
