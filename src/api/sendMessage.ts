import { Message } from "@/types/Message";
import { apiEndpoint } from "./constants";

export default async function sendMessage(
    message: string,
    type: "file" | "youtube",
    id: string
): Promise<Message> {
    if (apiEndpoint.length === 0) {
        return {
            text: "In chess, the knight has a unique L-shaped move. It can move two squares in one direction (either horizontally or vertically) and then one square perpendicular to that direction, or it can move two squares in one direction and then one square in the opposite direction. This distinct move allows the knight to jump over other pieces on the board.",
            sender: "bot",
        };
    }

    const data = (await fetch(
        `${apiEndpoint}/api/${type}/${id}/chat?question=${message}`
    ).then((res) => res.json())) as { reply: string; id: string };

    return {
        text: data.reply,
        sender: "bot",
    };
}
