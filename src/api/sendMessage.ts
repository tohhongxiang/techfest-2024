import { Message } from "@/types/Message";

export default async function sendMessage(message: string): Promise<Message> {
	await new Promise((r) => setTimeout(r, 500));

	return {
		text: "This is a reply to the message: " + message,
		sender: "bot",
	};
}