
/** @type {import('./$types').PageLoad} */
import { PUBLIC_PALM_API } from '$env/static/public'

const data = {
    prompt: {
      text: "Hello what is the capital of california?"
    }
  };

// export async function load( {fetch} ) {

//     const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       };

//     try {
//         const response = await fetch(`https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${PUBLIC_PALM_API}`, options);
//         const data = await response.json()
//         console.log(data)

//     } catch  (error) {
//         console.log(error)
//     }

//     return {};
// };
