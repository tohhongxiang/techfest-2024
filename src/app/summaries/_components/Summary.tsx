import getSummary from "@/api/getSummary";
import { Container } from "@mantine/core";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export default async function Summary({ id = "" }: { id: string }) {
	const data = await getSummary(id);
	const mdxSource = await serialize(data.summary, {
		mdxOptions: {
			development: process.env.NODE_ENV === "development",
		},
	});

	return (
		<Container className="prose">
			<MDXRemote {...mdxSource} />
		</Container>
	);
}
