import { serialize } from "next-mdx-remote/serialize";
import { apiEndpoint } from "./constants";

export default async function getAudioTranscription(
    id: string,
    type: "youtube" | "file"
) {
    if (apiEndpoint.length === 0) {
        const mdxSource = await serialize(
            `# Hello world Transcription for ${id}`,
            {
                mdxOptions: {
                    development: process.env.NODE_ENV === "development",
                },
            }
        );

        return {
            id,
            transcription: mdxSource,
        };
    }

    const data = (await fetch(
        `${apiEndpoint}/api/${type}/${id}/transcription`,
        { next: { revalidate: 0 } }
    ).then((res) => res.json())) as { id: string; transcription: string };

    const mdxSource = await serialize(data.transcription, {
        mdxOptions: {
            development: process.env.NODE_ENV === "development",
        },
    });

    return { id, transcription: mdxSource };
}
