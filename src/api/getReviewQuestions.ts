import { apiEndpoint } from "./constants";

export default async function getReviewQuestions(
    id: string,
    type: "youtube" | "file"
): Promise<{ id: string; questions: string[] }> {
    if (apiEndpoint.length === 0) {
        return {
            id,
            questions: [
                "What is life?",
                "Do fish get thirsty?",
                "Why do we lift our hands when we knock on the door?",
            ],
        };
    }

    const data = (await fetch(`${apiEndpoint}/api/${type}/${id}/questions`, {
        next: { revalidate: 0 },
    }).then((res) => res.json())) as { id: string; questions: string[] };

    return data;
}
