import { apiEndpoint } from "./constants";

export default async function getReviewQuestions(
    id: string,
    type: "youtube" | "file"
): Promise<{ id: string; questions: string[] }> {
    if (apiEndpoint.length === 0) {
        return {
            id,
            questions: [
                "What is row reduction?",
                "What is the definition of a basis?",
                "How does Gaussian Elimination work?",
                "Given 2 vectors, how do you tell if they are orthogonal?",
            ],
        };
    }

    const data = (await fetch(`${apiEndpoint}/api/${type}/${id}/questions`, {
        next: { revalidate: 0 },
    }).then((res) => res.json())) as { id: string; questions: string[] };

    return data;
}
