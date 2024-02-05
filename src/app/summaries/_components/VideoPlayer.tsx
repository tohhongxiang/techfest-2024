import getVideoURL from "@/api/getVideoURL";
import ReactPlayer from "react-player";

export default async function VideoPlayer({
  id = "",
  type = "youtube",
}: {
  id: string;
  type: "file" | "youtube";
}) {
  let videoURL = "";
  if (type === "youtube") {
    videoURL = `https://www.youtube.com/watch?v=${id}`;
  } else {
    videoURL = (await getVideoURL(id)).url;
  }

  return <ReactPlayer url={videoURL} height="100%" width="100%" controls />;
}
