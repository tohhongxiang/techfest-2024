import getAdditionalReadings from "@/api/getAdditionalReadings";
import { List } from "@mantine/core";

export default async function AdditionalReadings({ id = "" }: { id: string }) {
    const data = await getAdditionalReadings(id)

    return (
        <List className="list-disc">
            {data.readings.map(reading => (
                <List.Item key={reading}>
                    <a href={reading} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-800">{reading}</a>
                </List.Item>
            ))}
        </List>
    )
}