"use client";

import {
    Stack,
    Tabs,
    Title,
    Container,
    Flex,
    AppShell,
    AppShellAside,
    AppShellMain,
    Portal,
    Affix,
    ScrollArea,
} from "@mantine/core";
import {
    IconPhoto,
    IconMessageCircle,
    IconSettings,
    IconMessage,
    IconTestPipe,
    IconTestPipe2,
    IconBook2,
} from "@tabler/icons-react";
import { Suspense } from "react";
import AdditionalReadings from "../../_components/AdditionalReadings";
import AudioTranscription from "../../_components/AudioTranscription";
import Summary from "../../_components/Summary";
import VideoPlayer from "../../_components/VideoPlayer";
import ListSkeleton from "../../_components/skeletons/ListSkeleton";
import TextSkeleton from "../../_components/skeletons/TextSkeleton";
import VideoSkeleton from "../../_components/skeletons/VideoSkeleton";
import ChatSection from "../../_components/ChatSection";
import ReviewQuestions from "../../_components/ReviewQuestions";
import useSWR from "swr";
import getSummary from "@/api/getSummary";
import getAudioTranscription from "@/api/getAudioTranscription";

export default function SummaryPage({
    params,
}: {
    params: { id: string; videoType: "youtube" | "file" };
}) {
    const { videoType, id } = params as {
        id: string;
        videoType: "youtube" | "file";
    };

    return (
        <Flex className="h-full">
            <Stack className="grow overflow-auto">
                <ScrollArea className="pr-4">
                    <Suspense fallback={<VideoSkeleton />}>
                        <div className="h-[500px]">
                            <VideoPlayer
                                id={id}
                                type={videoType as "file" | "youtube"}
                            />
                        </div>
                    </Suspense>
                    <Tabs defaultValue="summary">
                        <Tabs.List>
                            <Tabs.Tab
                                value="summary"
                                leftSection={<IconPhoto />}
                            >
                                Summary
                            </Tabs.Tab>
                            <Tabs.Tab
                                value="transcription"
                                leftSection={<IconMessageCircle />}
                            >
                                Audio Transcription
                            </Tabs.Tab>
                            <Tabs.Tab
                                value="review-questions"
                                leftSection={<IconBook2 />}
                            >
                                Review Questions
                            </Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="summary">
                            <Container fluid className="p-4">
                                <Summary id={id} videoType={videoType} />
                            </Container>
                        </Tabs.Panel>
                        <Tabs.Panel value="transcription">
                            <Container fluid className="p-4">
                                <AudioTranscription
                                    id={id}
                                    videoType={videoType}
                                />
                            </Container>
                        </Tabs.Panel>
                        <Tabs.Panel value="review-questions">
                            <Container fluid className="p-4">
                                <ReviewQuestions
                                    id={id}
                                    videoType={videoType as "file" | "youtube"}
                                />
                            </Container>
                        </Tabs.Panel>
                    </Tabs>
                </ScrollArea>
            </Stack>
            <div className="border-l border-gray-600/10 w-1/3">
                <ChatSection
                    id={id}
                    videoType={videoType as "file" | "youtube"}
                />
            </div>
        </Flex>
    );
}
