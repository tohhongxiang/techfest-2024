import { Skeleton } from "@mantine/core";

export default function ListSkeleton() {
    return (
        <ul className="flex flex-col gap-y-4">
            <li><Skeleton width="75%" height="16" /></li>
            <li><Skeleton width="75%" height="16" /></li>
            <li><Skeleton width="75%" height="16" /></li>
            <li><Skeleton width="75%" height="16" /></li>
            <li><Skeleton width="75%" height="16" /></li>
            <li><Skeleton width="75%" height="16" /></li>
        </ul>
    )
}