"use client";

import {
	Alert,
	Button,
	Container,
	FileInput,
	Stack,
	Text,
	TextInput,
	Title,
	Stepper,
	Code,
	Group,
	Loader,
	Flex,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "@mantine/form";
import ReactPlayer from "react-player";
import { useRouter } from "next/navigation";

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

			router.push("/summaries/123")
		}
	};

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<Stack>
					<Title order={1} className="text-center">
						Lecture to TokTik
					</Title>
					<Alert variant="light" color="blue">
						LTTT is a Generative AI tool that generates summary
						shorts of lecture inputs. It can also learn from the
						lecture content and provide clarifications to content.
					</Alert>
					<Stepper active={currentStep} className="p-8">
						<Stepper.Step
							label="Choose URL or File"
							description="Input either a Youtube URL, or upload a file"
						>
							<Stack gap="md">
								<TextInput
									label="Youtube URL"
									placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
									{...form.getInputProps("youtubeURL")}
								/>
								<Text c="dimmed" className="text-center">
									OR
								</Text>
								<FileInput
									className="-mt-4"
									clearable
									label="Upload a File"
									placeholder="xxx.mp4, xxx.mov"
									{...form.getInputProps("uploadedFile")}
									accept=".mp4,.mov"
								/>
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
								<Code block mt="xl">
									{JSON.stringify(form.values, null, 2)}
								</Code>
								<Alert color="green">
									<Flex gap="md" align="center">
										<Loader /> 
										<Text>Generating summary...</Text>
									</Flex>
								</Alert>
							</Stack>
						</Stepper.Completed>
					</Stepper>
					<Group justify="flex-end" mt="xl">
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
