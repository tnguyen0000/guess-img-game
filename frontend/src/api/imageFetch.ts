import { apiCallBody } from "./apiHelpers";

export async function test() {
  let testResponse = await apiCallBody('GET', '/test/');
  console.log(testResponse)
  return testResponse
};