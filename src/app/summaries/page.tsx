"use client";

import { Card, Stack, Title } from "@mantine/core";
import Link from "next/link";

export default function SummaryPage() {
    return (
        <Stack>
            <Title>Summaries by You</Title>
            <ul className="flex flex-col gap-y-4">
                <li>
                    <Link href="/summaries/youtube/b-Bb_TyhC1A">
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            The Search for the Longest Infinite Chess Game
                        </Card>
                    </Link>
                </li>
                <li>
                    <Link href="/summaries/youtube/yg16u_bzjPE">
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            Would you sacrifice one person to save five? -
                            Eleanor Nelsen
                        </Card>
                    </Link>
                </li>
                <li>
                    <Link href="/summaries/youtube/i53Gi_K3o7I">
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            20 System Design Concepts Explained in 10 Minutes
                        </Card>
                    </Link>
                </li>
            </ul>
        </Stack>
    );
}
