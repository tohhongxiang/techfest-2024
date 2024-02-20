import { serialize } from "next-mdx-remote/serialize";
import { apiEndpoint } from "./constants";

export default async function getSummary(id: string, type: string) {
    if (apiEndpoint.length === 0) {
        await new Promise((r) => setTimeout(r, 2000));
        const mdxSource = await serialize(
            `The video covers 20 essential concepts for scaling up an application to handle more users. It starts by explaining the difference between vertical and horizontal scaling, with horizontal scaling being the preferred approach as it adds redundancy, fault tolerance and allows for almost infinite scaling. The use of load balancers and content delivery networks (CDNs) for caching is also discussed. The video then moves on to various API patterns and protocols, including REST, GraphQL, and gRPC, and the considerations for databases when scaling, such as acid compliance, sharding and replication. Distributed systems are also discussed, including leader/follower replication and the CAP theorem, as well as the use of message queues and decoupling different parts of an app.`,
            {
                mdxOptions: {
                    development: process.env.NODE_ENV === "development",
                },
            }
        );
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
