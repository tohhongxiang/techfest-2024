import { apiEndpoint } from "./constants";

export default async function getAudioTranscription(
    id: string,
    type: "youtube" | "file"
) {
    const data = (await fetch(
        `${apiEndpoint}/api/${type}/${id}/transcription`
    ).then((res) => res.json)) as { id: string; transcription: string };
    return data;
}
