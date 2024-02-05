"use client";

import {
	ActionIcon,
	AppShell,
	Burger,
	Flex,
	NavLink,
	ScrollArea,
	Tooltip
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
	IconAddressBook,
	IconBook,
	IconBook2,
	IconBrandDisqus,
	IconBrandGithub,
	IconHome2,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		label: "Lecture Summarizer",
		icon: <IconHome2 size="1rem" stroke={1.5} />,
		href: "/",
	},
	{
		label: "Generated Summaries",
		icon: <IconBook2 size="1rem" stroke={1.5} />,
		href: "/summaries",
	},
	{
		label: "About Us",
		icon: <IconAddressBook size="1rem" stroke={1.5} />,
		href: "/about",
	},
];

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [opened, { toggle }] = useDisclosure();
	const path = usePathname();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: "sm",
				collapsed: { mobile: !opened },
			}}
			padding="md"
			className="h-screen"
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
			<AppShell.Navbar p="md">
				<AppShell.Section grow component={ScrollArea}>
					{links.map((link) => (
						<NavLink
							key={link.href}
							component={Link}
							href={link.href}
							active={path === link.href}
							label={link.label}
							leftSection={link.icon}
						/>
					))}
				</AppShell.Section>
				<AppShell.Section className="border-t border-gray-400/20 pt-2">
					<Flex justify="flex-end">
						<Tooltip label="Github">
							<ActionIcon
								size={42}
								variant="subtle"
								c="dimmed"
								aria-label="Github Link"
								component="a"
								href="https://github.com/tohhongxiang123/techfest-2024"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconBrandGithub />
							</ActionIcon>
						</Tooltip>
						<Tooltip label="Devpost">
							<ActionIcon
								size={42}
								variant="subtle"
								c="dimmed"
								aria-label="Github Link"
								component="a"
								href="https://devpost.com/software/placeholder-7bhy40?ref_content=user-portfolio&ref_feature=in_progress"
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconBrandDisqus />
							</ActionIcon>
						</Tooltip>
					</Flex>
				</AppShell.Section>
			</AppShell.Navbar>
			<AppShell.Main className="w-full h-full">{children}</AppShell.Main>
		</AppShell>
	);
}
