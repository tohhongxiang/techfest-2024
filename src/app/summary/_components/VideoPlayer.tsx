import getVideoURL from "@/api/getVideoURL";
import { Container } from "@mantine/core";
import ReactPlayer from "react-player";

export default async function VideoPlayer() {
	const data = await getVideoURL("aiklujdjhg");

	return (
        <ReactPlayer
            url={data.url}
            height="100%"
            width="100%"
            controls
        />
	);
}
