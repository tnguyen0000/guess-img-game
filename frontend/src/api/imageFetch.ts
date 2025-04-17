import { apiCallBody } from "./apiHelpers";

export async function getImages() {
  try {
    const imageResponse = await apiCallBody('GET', '/getImages/');
    if ('error' in imageResponse) {
      throw imageResponse
    }
    return imageResponse;
  } catch (error) {
    throw {
      'error': 'Failed to call backend'
    };
  }
};