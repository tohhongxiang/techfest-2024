import { serialize } from "next-mdx-remote/serialize";
import { apiEndpoint } from "./constants";

export default async function getSummary(id: string, type: string) {
    if (apiEndpoint.length === 0) {
        await new Promise((r) => setTimeout(r, 2000));
        const mdxSource = await serialize(`# Summary for ID ${id}`, {
            mdxOptions: {
                development: process.env.NODE_ENV === "development",
            },
        });
        return {
            id,
            summary: mdxSource,
        };
    }
    const data = (await fetch(`${apiEndpoint}/api/${type}/${id}/summary`, {
        next: { revalidate: 0 },
    }).then((res) => res.json())) as { id: string; summary: string };

    const mdxSource = await serialize(data.summary, {
        mdxOptions: {
            development: process.env.NODE_ENV === "development",
        },
    });

    return { id: data.id, summary: mdxSource };
}
