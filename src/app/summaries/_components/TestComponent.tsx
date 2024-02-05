import testAPI from "@/api/testAPI";

export default async function TestAPI() {
  const result = await testAPI();

  return <pre>{JSON.stringify(result, null, 2)}</pre>;
}
