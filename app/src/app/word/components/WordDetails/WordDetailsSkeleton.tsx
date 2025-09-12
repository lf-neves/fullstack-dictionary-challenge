import { Skeleton } from "@mui/material";

export function WordDetailsSkeleton() {
  return (
    <>
      <Skeleton variant="rectangular" width="100%" height={118} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 16,
          justifyContent: "space-between",
        }}
      >
        <Skeleton variant="rectangular" width={80} height={36} />
        <Skeleton variant="rectangular" width={80} height={36} />
      </div>
    </>
  );
}
