import getAudioTranscription from "@/api/getAudioTranscription";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Container } from "@mantine/core";

export default async function AudioTranscription({
    id = "",
    videoType = "youtube",
}: {
    id: string;
    videoType: "file" | "youtube";
}) {
    const data = await getAudioTranscription(id, videoType);

    const mdxSource = await serialize(data.transcription, {
        mdxOptions: {
            development: process.env.NODE_ENV === "development",
        },
    });

    return (
        <Container className="prose">
            <MDXRemote {...mdxSource} />
        </Container>
    );
}
