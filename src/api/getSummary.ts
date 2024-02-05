import { apiEndpoint } from "./constants";

export default async function getSummary(id: string, type: string) {
    if (apiEndpoint.length === 0) {
        return {
            id,
            summary: `# Summary for ID ${id}`,
        };
    }
    const data = (await fetch(`${apiEndpoint}/api/${type}/${id}/summary`, {
        next: { revalidate: 0 },
    }).then((res) => res.json())) as { id: string; summary: string };

    return data;
}
