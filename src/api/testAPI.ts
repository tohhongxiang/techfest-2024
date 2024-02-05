import { apiEndpoint } from "./constants";

export default async function testAPI() {
  const result = await fetch(`${apiEndpoint}/todos/1`).then((r) => r.json());

  return result;
}
