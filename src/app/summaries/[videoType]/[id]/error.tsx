"use client";

import { Alert, Button, Center, Stack, Text } from "@mantine/core";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.log(error);
    return (
        <Center>
            <Alert title="Something went wrong!" color="red">
                <Stack>
                    <Text>
                        An unexpected error has occurred. Please try again!
                    </Text>
                    <pre>{error.message}</pre>
                    <Button onClick={() => reset()} color="red">
                        Try again
                    </Button>
                </Stack>
            </Alert>
        </Center>
    );
}
