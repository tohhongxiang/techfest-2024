import getReviewQuestions from "@/api/getReviewQuestions";
import { List } from "@mantine/core";

export default async function ReviewQuestions({
    id,
    videoType,
}: {
    id: string;
    videoType: "file" | "youtube";
}) {
    const data = await getReviewQuestions(id, videoType);

    return (
        <List className="list-disc">
            {data.questions.map((question) => (
                <List.Item key={question}>{question}</List.Item>
            ))}
        </List>
    );
}
