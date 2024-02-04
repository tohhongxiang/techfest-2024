"use client";

import { Card, Stack, Title } from "@mantine/core";
import Link from "next/link";

export default function SummaryPage() {
	return (
		<Stack>
			<Title>Summaries by You</Title>
			<ul className="flex flex-col gap-y-4">
				<li>
					<Link href="/summaries/123">
						<Card shadow="sm" padding="lg" radius="md" withBorder>
							Summary 123
						</Card>
					</Link>
				</li>
				<li>
					<Link href="/summaries/768">
						<Card shadow="sm" padding="lg" radius="md" withBorder>
							Summary 768
						</Card>
					</Link>
				</li>
				<li>
					<Link href="/summaries/5463">
						<Card shadow="sm" padding="lg" radius="md" withBorder>
							Summary 5463
						</Card>
					</Link>
				</li>
			</ul>
		</Stack>
	);
}
