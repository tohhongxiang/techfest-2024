"use client";

import {
    Flex,
    Text,
    Title,
    Container,
    List,
    Stack,
    Badge,
    Button,
    Card,
    Group,
    Grid,
    Divider,
} from "@mantine/core";
import {
    IconBallpen,
    IconBooks,
    IconMinimize,
    IconSchool,
    IconTextSpellcheck,
} from "@tabler/icons-react";

export default function AboutPage() {
    return (
        <Stack gap="lg">
            <Container className="flex flex-col gap-y-8 mb-16">
                <Title className="text-center">About Us</Title>
                <Text>
                    LTTT is a Generative AI tool that generates summary shorts
                    of lecture inputs. It can also learn from the lecture
                    content and provide clarifications to content. With a
                    YouTube URL or a video file, you can generate a 1-minute
                    long video summarising key content from the video lecture.
                    Also, transcriptions and further readings will be provided.
                    Plus, the Prof. LTTT virtual assistant will learn the
                    content with you, and can provide additional assistance to
                    aid your understanding, or recommend additional readings to
                    supplement your learning.
                </Text>
            </Container>
            <Container className="flex flex-col gap-y-8 mb-16">
                <Title className="text-center">Features</Title>
                <Grid>
                    <Grid.Col span={4}>
                        <Card
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            h="100%"
                            withBorder
                            className="transition-all hover:scale-105"
                        >
                            <Group mt="md" mb="xs">
                                <IconMinimize />
                                <Text fw={500}>Summarisation</Text>
                            </Group>
                            <Text size="sm" c="dimmed">
                                Summarise long lectures and videos into
                                bite-sized content for easy reviewing!
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Card
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                            h="100%"
                            className="transition-all hover:scale-105"
                        >
                            <Group mt="md" mb="xs">
                                <IconTextSpellcheck />
                                <Text fw={500}>Transcription</Text>
                            </Group>
                            <Text size="sm" c="dimmed">
                                Transcribe your lectures into a text passage to
                                easily search through the recording!
                            </Text>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Card
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                            h="100%"
                            className="transition-all hover:scale-105"
                        >
                            <Group mt="md" mb="xs">
                                <IconSchool />
                                <Text fw={500}>Profbot</Text>
                            </Group>
                            <Text size="sm" c="dimmed">
                                A virtual academic companion, designed to
                                quickly clarify doubts about the lecture!
                            </Text>
                        </Card>
                    </Grid.Col>
                </Grid>
            </Container>
            <Container mb="lg">
                <Grid gutter="lg">
                    <Grid.Col span={6}>
                        <Container p="lg" h="100%">
                            <Title order={2} mb="lg">
                                <IconBallpen />
                                For Students
                            </Title>
                            <Text mb="md">
                                Students aren't just those in educational
                                institutions - it could be anyone viewing
                                content for their own learning!
                            </Text>
                            <List className="list-disc">
                                <List.Item>
                                    Get readable transcripts of lectures
                                </List.Item>
                                <List.Item>
                                    Clarify doubts anytime, anywhere
                                </List.Item>
                                <List.Item>
                                    Generate a bite-sized summary to improve
                                    initial engagement with content
                                </List.Item>
                            </List>
                        </Container>
                    </Grid.Col>
                    <Grid.Col span={6} h="100%">
                        <Container p="lg">
                            <Title order={2} mb="lg">
                                <IconBooks /> For Lecturers
                            </Title>
                            <Text mb="md">
                                Conducting lectures on topics you love? LTTT
                                helps enhance the learning experience for all
                                learners. Your content is still central to this
                                operation!
                            </Text>
                            <List className="list-disc">
                                <List.Item>
                                    Get readable transcripts of lectures
                                </List.Item>
                                <List.Item>
                                    Virtual assistant answering queries on your
                                    behalf
                                </List.Item>
                                <List.Item>
                                    Review summarised content to ensure that key
                                    content is emphasised sufficiently
                                </List.Item>
                            </List>
                        </Container>
                    </Grid.Col>
                </Grid>
            </Container>
            <Container>
                <Title className="text-center" mb="lg">
                    Who, Why and What Next?
                </Title>
                <Text mb="md">
                    2 computer scientists and a mechanical engineer joined a
                    hackathon and thought that it would be a great time to
                    develop a tool to help them summarise their hours-long
                    lectures so that they could, hopefully, have more time to
                    join more hackathons.
                </Text>
                <Text mb="md">
                    Ironically, they were in their final semesters and in fact,
                    did not have many lectures that needed to be summarised
                    using this tool. Still. it could be of use to many others.
                    it is expected that other students would find this tool
                    convenient - but even the lecturers can leverage on this to
                    check for the ease of understanding of their lecture
                    content, or even as a complement to their teaching.
                </Text>
                <Text mb="md">
                    LTTT has the potential to change the way students approach
                    new content - it produces an “appetizer” that{" "}
                    <strong>reduces the cognitive inertia</strong> people face
                    when dealing with new, and sometimes overwhelming
                    information. Extend this to the learning of any content,
                    coupled with the ProfBot virtual assistant that answers
                    lecture-related content, and all learners regardless of
                    their educational level will experienced accelerated
                    learning.
                </Text>
            </Container>
        </Stack>
    );
}
