"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { Alert, Container } from "@mantine/core";
import TextSkeleton from "./skeletons/TextSkeleton";
import getAudioTranscription from "@/api/getAudioTranscription";
import useSWR from "swr";

export default function AudioTranscription({
    id,
    videoType,
}: {
    id: string;
    videoType: "file" | "youtube";
}) {
    const { data, error, isLoading } = useSWR([id, videoType, "audio"], () =>
        getAudioTranscription(id, videoType)
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
                <MDXRemote {...data?.transcription!} />
            )}
        </Container>
    );
}
