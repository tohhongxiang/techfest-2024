"use client";

import {
    Alert,
    Button,
    Code,
    Container,
    FileInput,
    Flex,
    Group,
    Loader,
    Stack,
    Stepper,
    Text,
    TextInput,
    Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function HomePage() {
    const [currentStep, setCurrentStep] = useState(0);

    const form = useForm<{ youtubeURL: string; uploadedFile: File | null }>({
        initialValues: {
            youtubeURL: "",
            uploadedFile: null,
        },

        validate: (values) => {
            if (currentStep === 0) {
                if (
                    values.youtubeURL.trim().length === 0 &&
                    values.uploadedFile === null
                ) {
                    return {
                        youtubeURL: "Please input a URL",
                        uploadedFile: "Please upload a file",
                    };
                }

                if (
                    values.youtubeURL.trim().length > 0 &&
                    values.uploadedFile !== null
                ) {
                    return {
                        youtubeURL: "Please choose only 1 out of 2",
                        uploadedFile: "Please choose only 1 out of 2",
                    };
                }

                return {
                    youtubeURL: null,
                    uploadedFile: null,
                };
            }

            return {};
        },
    });

    const nextStep = () => {
        setCurrentStep((currentStep) => {
            if (form.validate().hasErrors) {
                return currentStep;
            }

            return currentStep < 2 ? currentStep + 1 : currentStep;
        });
    };

    const prevStep = () => {
        setCurrentStep((currentStep) =>
            currentStep > 0 ? currentStep - 1 : currentStep
        );
    };

    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        nextStep();
        if (currentStep === 1) {
            console.log(form.values);
            if (form.values.youtubeURL.length > 0) {
                const url = new URL(form.values.youtubeURL);
                const videoID = url.searchParams.get("v");
                router.push(`/summaries/youtube/${videoID}`);
            }
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Stack>
                    <Title order={1} className="text-center">
                        lAIs
                    </Title>
                    <Alert variant="light" color="blue">
                        <strong>lAIs</strong> is a generative AI tool that
                        generates summaries of lecture videos. It can also learn
                        from the lecture content and provide clarifications to
                        content.
                    </Alert>
                    <Stepper active={currentStep} className="p-8">
                        <Stepper.Step
                            label="Choose URL"
                            description="Input a Youtube URL"
                        >
                            <Stack gap="md">
                                <TextInput
                                    label="Youtube URL"
                                    placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                    {...form.getInputProps("youtubeURL")}
                                />
                                {/* <Text c="dimmed" className="text-center">
                                    OR
                                </Text>
                                <FileInput
                                    className="-mt-4"
                                    clearable
                                    label="Upload a File"
                                    placeholder="xxx.mp4, xxx.mov"
                                    {...form.getInputProps("uploadedFile")}
                                    accept=".mp4,.mov"
                                /> */}
                            </Stack>
                        </Stepper.Step>
                        <Stepper.Step
                            label="Preview Video"
                            description="Check that your video is correct"
                        >
                            <Container
                                style={{
                                    position: "relative",
                                    paddingTop: "56.25%",
                                    height: 0,
                                    overflow: "hidden",
                                }}
                            >
                                <ReactPlayer
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                    }}
                                    url={
                                        form.values.uploadedFile
                                            ? URL.createObjectURL(
                                                  form.values.uploadedFile!
                                              )
                                            : form.values.youtubeURL
                                    }
                                    width="100%"
                                    height="100%"
                                    controls
                                />
                            </Container>
                        </Stepper.Step>
                        <Stepper.Completed>
                            <Stack>
                                <Alert color="green">
                                    <Flex gap="md" align="center">
                                        <Loader />
                                        <Text>Generating summary...</Text>
                                    </Flex>
                                </Alert>
                            </Stack>
                        </Stepper.Completed>
                    </Stepper>
                    <Group justify="flex-end" mt="xl" py="md">
                        {currentStep !== 0 && (
                            <Button
                                variant="default"
                                onClick={prevStep}
                                disabled={currentStep === 2}
                            >
                                Back
                            </Button>
                        )}
                        {currentStep !== 2 && (
                            <Button type="submit">
                                {currentStep === 0 ? "Preview" : "Submit"}
                            </Button>
                        )}
                    </Group>
                </Stack>
            </form>
        </Container>
    );
}
