import { apiEndpoint } from "./constants";

export default async function getAudioTranscription(
    id: string,
    type: "youtube" | "file"
) {
    if (apiEndpoint.length === 0) {
        return {
            id,
            transcription: `# Hello world Transcription for ${id}`,
        };
    }

    const data = (await fetch(
        `${apiEndpoint}/api/${type}/${id}/transcription`,
        { next: { revalidate: 0 } }
    ).then((res) => res.json())) as { id: string; transcription: string };
    return data;
}
