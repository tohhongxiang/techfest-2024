"use client";

import {
	AppShell,
	Burger,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBook } from "@tabler/icons-react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { mobile: !opened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<div className="flex p-4">
					<Burger
						opened={opened}
						onClick={toggle}
						hiddenFrom="sm"
						size="sm"
					/>
					<IconBook className="mx-2" />
					Lecture to Toktik
				</div>
			</AppShell.Header>
			<AppShell.Navbar p="md">Navbar</AppShell.Navbar>
			<AppShell.Main>
				{children}
			</AppShell.Main>
		</AppShell>
	);
}
