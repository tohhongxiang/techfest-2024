import { Skeleton, Stack } from "@mantine/core";

export default function TextSkeleton() {
    return (
        <Stack>
            <Skeleton width="100%" height="32" />
            <Skeleton width="100%" height="16" />
            <Skeleton width="100%" height="16" />
            <Skeleton width="100%" height="16" />
            <Skeleton width="100%" height="16" />
            <div className="p-2" />
            <Skeleton width="100%" height="16" />
            <Skeleton width="100%" height="16" />
            <Skeleton width="100%" height="16" />
        </Stack>
    )
}