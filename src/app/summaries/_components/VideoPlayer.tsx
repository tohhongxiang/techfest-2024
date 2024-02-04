import getVideoURL from "@/api/getVideoURL";
import { Container } from "@mantine/core";
import ReactPlayer from "react-player";

export default async function VideoPlayer({ id = "" }: { id: string }) {
	const data = await getVideoURL(id);

	return (
        <ReactPlayer
            url={data.url}
            height="100%"
            width="100%"
            controls
        />
	);
}
