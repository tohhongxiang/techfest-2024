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
                <h1
                    className="text-center text-8xl mt-4 mb-0 italic"
                    style={{ fontFamily: `"Pacifico", cursive` }}
                >
                    lAIs
                </h1>
                <Text className="text-center">
                    <i>Gothic for "I know"</i>.
                </Text>
            </Container>
            <Container className="flex flex-col mb-16">
                <Title className="text-center" mb="lg">
                    About Us
                </Title>
                <Text mb="md">
                    lAIs is an innovative Generative AI tool designed to
                    transform lengthy lectures into concise and digestible
                    formats. Using advanced natural language processing and
                    summarization techniques, lAIs analyzes extensive lecture
                    content and generates bite-sized summaries, extracting key
                    points and crucial information.
                </Text>
                <Text mb="md">
                    Moreover, lAIs goes beyond simple summarization by
                    intelligently formulating relevant test questions based on
                    the lecture content. This feature helps learners reinforce
                    their understanding, facilitating effective study sessions.
                </Text>
                <Text mb="md">
                    Whether you're a student preparing for exams or a
                    professional looking to grasp essential concepts quickly,
                    lAIs streamlines the learning process by making complex
                    information accessible and actionable. Say goodbye to
                    information overload and hello to efficient, personalized
                    learning with lAIs.
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
