import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import { theme } from "../assets/theme";

const Wrapper = styled.div`
  margin-top: 100px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  /*  ${({ theme }) => theme.mq.desktop} {
    padding: 0 320px;
  } */
`;

function createData(realizacja, typ, data) {
  return { realizacja, typ, data };
}

const rows = [
  createData(`Estee Lauder`, "Post Produkcja", "02.02.23"),
  createData("Netflix - Park Jurajski", "Dźwięk na planie", "10.02.23"),
  createData("OLX - Reklama", "Post Produkcja", "25.02.23"),
  createData("Nestle - Lody Kaktus", "Dźwięk na planie", "02.03.23"),
  createData("Allegro - Reklama Świąteczna", "Dźwięk na planie", "13.03.23"),
  createData("Wirtualna Polska - Wywiad", "Dźwięk na planie", "22.03.23"),
];

const RealizacjeThird = () => {
  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Realizacja</TableCell>
              <TableCell align="right">Typ Realizacji</TableCell>
              <TableCell align="right">Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.realizacja}
                </TableCell>
                <TableCell align="right">{row.typ}</TableCell>
                <TableCell align="right">{row.data}</TableCell>
                {/* <TableCell align="right">{row.data}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default RealizacjeThird;
