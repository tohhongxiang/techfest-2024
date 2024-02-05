"use client";

import { Alert, Container } from "@mantine/core";

import { MDXRemote } from "next-mdx-remote";
import TextSkeleton from "./skeletons/TextSkeleton";
import useSWR from "swr";
import getSummary from "@/api/getSummary";

export default function Summary({
    id,
    videoType,
}: {
    id: string;
    videoType: "youtube" | "file";
}) {
    const { data, error, isLoading } = useSWR([id, videoType, "summary"], () =>
        getSummary(id, videoType)
    );

    if (isLoading) {
        return (
            <Container className="prose">
                <TextSkeleton />
            </Container>
        );
    }

    return (
        <Container className="prose">
            {error ? (
                <Alert color="red" title="Error">
                    An unexpected error has occurred: {error}
                </Alert>
            ) : (
                <MDXRemote {...data?.summary!} />
            )}
        </Container>
    );
}
