import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Skeleton, Typography } from "@mui/material";
import { useSuspenseUserVisitedWordsHistoryQuery } from "@/typings/graphql/codegen/graphqlOperations";
import { Suspense } from "react";

function HistoryTableRows() {
  const { data } = useSuspenseUserVisitedWordsHistoryQuery();

  if (!data?.userVisitedWordsHistory.length) {
    return (
      <TableRow>
        <TableCell colSpan={4} align="center">
          <Typography variant="body1" color="textSecondary">
            No history available
          </Typography>
        </TableCell>
      </TableRow>
    );
  }

  return data.userVisitedWordsHistory.map((history) => (
    <TableRow
      key={history.userWordHistoryId}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {history.word.word}
      </TableCell>
      <TableCell align="right">
        {new Date(history.lastVisitedAt).toLocaleDateString()}
      </TableCell>
      <TableCell align="right">
        {new Date(history.lastVisitedAt).toLocaleTimeString()}
      </TableCell>
    </TableRow>
  ));
}

export function VisitedWordsHistoryTable() {
  return (
    <TableContainer component={Paper} style={{ maxHeight: 300 }}>
      <Table
        stickyHeader
        sx={{ minWidth: 650 }}
        aria-label="visited words history table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Word</TableCell>
            <TableCell align="right">Viewed date</TableCell>
            <TableCell align="right">Viewed time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Suspense
            fallback={
              <TableRow>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell align="right">
                  <Skeleton />
                </TableCell>
                <TableCell align="right">
                  <Skeleton />
                </TableCell>
              </TableRow>
            }
          >
            <HistoryTableRows />
          </Suspense>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
