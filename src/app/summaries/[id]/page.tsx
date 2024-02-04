"use client";

import { Stack, Tabs, Title, Container } from "@mantine/core";
import {
	IconPhoto,
	IconMessageCircle,
	IconSettings,
} from "@tabler/icons-react";
import { Suspense } from "react";
import AdditionalReadings from "../_components/AdditionalReadings";
import AudioTranscription from "../_components/AudioTranscription";
import Summary from "../_components/Summary";
import VideoPlayer from "../_components/VideoPlayer";
import ListSkeleton from "../_components/skeletons/ListSkeleton";
import TextSkeleton from "../_components/skeletons/TextSkeleton";
import VideoSkeleton from "../_components/skeletons/VideoSkeleton";

export default function SummaryPage({ params }: { params: { id: string }}) {
    const id = params.id

	return (
		<Stack>
			<Title>Video Title</Title>
			<Suspense fallback={<VideoSkeleton />}>
				<div className="h-[500px]">
					<VideoPlayer id={id} />
				</div>
			</Suspense>
			<Tabs defaultValue="summary">
				<Tabs.List>
					<Tabs.Tab value="summary" leftSection={<IconPhoto />}>
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
							<Summary id={id} />
						</Suspense>
					</Container>
				</Tabs.Panel>
				<Tabs.Panel value="transcription">
					<Container fluid className="p-4">
						<Suspense fallback={<TextSkeleton />}>
							<AudioTranscription id={id} />
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
		</Stack>
	);
}
