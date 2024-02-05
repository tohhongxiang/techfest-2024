"use client";

import getReviewQuestions from "@/api/getReviewQuestions";
import { Alert, List } from "@mantine/core";
import useSWR from "swr";
import ListSkeleton from "./skeletons/ListSkeleton";

export default function ReviewQuestions({
    id,
    videoType,
}: {
    id: string;
    videoType: "file" | "youtube";
}) {
    const { data, isLoading, error } = useSWR(
        [id, videoType, "questions"],
        () => getReviewQuestions(id, videoType)
    );

    if (isLoading) {
        return <ListSkeleton />;
    }

    return (
        <List className="list-disc">
            {error ? (
                <Alert color="red" title="Error">
                    An unexpected error has occurred: {error}
                </Alert>
            ) : (
                data!.questions.map((question) => (
                    <List.Item key={question}>{question}</List.Item>
                ))
            )}
        </List>
    );
}
