import { Message } from "@/types/Message";
import { apiEndpoint } from "./constants";

export default async function sendMessage(
    message: string,
    type: "file" | "youtube",
    id: string
): Promise<Message> {
    const data = (await fetch(
        `${apiEndpoint}/api/${type}/${id}/chat?question=${message}`
    ).then((res) => res.json())) as { reply: string; id: string };

    return {
        text: data.reply,
        sender: "bot",
    };
}
