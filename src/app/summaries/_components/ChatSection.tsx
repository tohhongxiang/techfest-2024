"use client";

import sendMessage from "@/api/sendMessage";
import { Message } from "@/types/Message";
import {
    Button,
    Text,
    Flex,
    Loader,
    ScrollArea,
    Stack,
    TextInput,
    Title,
} from "@mantine/core";
import { IconSend2 } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

function MessageBubble({
    children,
    sender,
    className = "",
}: {
    children: React.ReactNode;
    sender: string;
    className?: string;
}) {
    return (
        <div
            className={`${
                sender === "user" ? "bg-blue-300" : "inherit"
            } px-4 py-2 rounded-md border-2 border-gray-500/10 ${className}`}
        >
            {children}
        </div>
    );
}

export default function ChatSection({
    id,
    videoType,
}: {
    id: string;
    videoType: "file" | "youtube";
}) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [typedMessage, setTypedMessage] = useState("");

    const messageListRef = useRef<HTMLDivElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const messageToSendText = typedMessage;
        setMessages((c) => [...c, { text: messageToSendText, sender: "user" }]);
        setTypedMessage("");

        setIsLoading(true);
        const receivedMessage = await sendMessage(
            messageToSendText,
            videoType,
            id
        );
        setIsLoading(false);
        setMessages((c) => [...c, receivedMessage]);
    };

    // everytime a new message appears, scroll down to most recent message
    useEffect(() => {
        messageListRef?.current?.lastElementChild?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    return (
        <Stack className="h-full pl-4 pr-0 py-0 flex flex-col">
            <Title>Chat</Title>
            <ScrollArea pr="sm" className="h-full">
                <Stack className="flex flex-col gap-y-2" ref={messageListRef}>
                    {messages.length === 0 ? (
                        <Text c="dimmed">
                            <i>No messages... Type a message to begin!</i>
                        </Text>
                    ) : (
                        messages.map((message, index) => (
                            <div
                                key={index}
                                className={`${
                                    message.sender === "user"
                                        ? "ml-auto text-right"
                                        : "mr-auto text-left"
                                }`}
                            >
                                <MessageBubble sender={message.sender}>
                                    {message.text}
                                </MessageBubble>
                            </div>
                        ))
                    )}
                    {isLoading && (
                        <MessageBubble
                            sender={"bot"}
                            className="mr-auto text-left bg-gray-200"
                        >
                            <Flex align={"center"} gap="sm">
                                <Loader size="sm" />{" "}
                                <Text c="dimmed">Loading...</Text>
                            </Flex>
                        </MessageBubble>
                    )}
                </Stack>
            </ScrollArea>
            <form onSubmit={handleSubmit}>
                <Flex className="w-full justify-stretch gap-x-2">
                    <TextInput
                        placeholder="Send a message"
                        className="w-full"
                        value={typedMessage}
                        onChange={(e) => setTypedMessage(e.target.value)}
                    />
                    <Button type="submit" disabled={isLoading}>
                        <IconSend2 />
                    </Button>
                </Flex>
            </form>
        </Stack>
    );
}
