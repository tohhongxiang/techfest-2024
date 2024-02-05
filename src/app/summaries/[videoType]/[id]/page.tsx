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

export default function SummaryPage({
    params,
}: {
    params: { id: string; videoType: "youtube" | "file" };
}) {
    const { videoType, id } = params;

    return (
        <Flex className="h-full">
            <Stack className="grow overflow-auto">
                <ScrollArea className="pr-4">
                    <Title>Video Title</Title>
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
                                value="additional-readings"
                                leftSection={<IconSettings />}
                            >
                                Additional Readings
                            </Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="summary">
                            <Container fluid className="p-4">
                                <Suspense fallback={<TextSkeleton />}>
                                    <Summary
                                        id={id}
                                        videoType={
                                            videoType as "file" | "youtube"
                                        }
                                    />
                                </Suspense>
                            </Container>
                        </Tabs.Panel>
                        <Tabs.Panel value="transcription">
                            <Container fluid className="p-4">
                                <Suspense fallback={<TextSkeleton />}>
                                    <AudioTranscription
                                        id={id}
                                        videoType={
                                            videoType as "file" | "youtube"
                                        }
                                    />
                                </Suspense>
                            </Container>
                        </Tabs.Panel>
                        <Tabs.Panel value="additional-readings">
                            <Container fluid className="p-4">
                                <Suspense fallback={<ListSkeleton />}>
                                    <AdditionalReadings id={id} />
                                </Suspense>
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
