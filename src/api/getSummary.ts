import { apiEndpoint } from "./constants";

export default async function getSummary(id: string, type: string) {
    const data = (await fetch(`${apiEndpoint}/api/${type}/${id}/summary`).then(
        (res) => res.json()
    )) as { id: string; summary: string };

    return data;
}
