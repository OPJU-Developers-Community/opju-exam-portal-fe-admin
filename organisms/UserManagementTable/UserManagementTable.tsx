// lib and others
import { useEffect, useState } from "react";

// styled component
import {
  CellWrapper,
  StyledChip,
  StyledIconButton,
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  TableWrapper,
  Text,
} from "./UserManagementTableStyle";
import {
  EditButtonIcon,
  RemoveButtonIcon,
  SerialNoIcon,
  TableActionIcon,
  TableEmailIcon,
  TablePasswordEyeCloseIcon,
  TablePasswordEyeOpenIcon,
  TablePasswordIcon,
  TablePasswrodDotIcon,
  TableProfileIcon,
  TableSubjectIcon,
} from "@/atoms/Icons";
import { Skeleton, TableRow } from "@mui/material";
import XButton from "@/atoms/XButton/XButton";
import XChip from "@/atoms/XChip/XChip";

// utils
import { userManagementTableHeadCells } from "@/utils/constants";

// types & interface
type userManagementPropType = {
  data: userData[];
  apiStatus: string;
};

type userData = {
  email: string;
  firstname: string;
  lastname: string;
  profilePic: string;
  role: string;
  access: string[];
};

const UserManagementTable = (props: userManagementPropType) => {
  const { data, apiStatus } = props;

  return (
    <TableWrapper>
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            {userManagementTableHeadCells.map(({ icon, label }, i) => (
              <StyledTableCell>
                <CellWrapper>
                  {icon}
                  <Text marginLeft={1}>{label}</Text>
                </CellWrapper>
              </StyledTableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <StyledTableBody>
          {apiStatus === "loading" && (
            <>
              {[...new Array(5)].map((_, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {[...new Array(6)].map((_, cellIndex) => (
                    <StyledTableCell key={cellIndex}>
                      <Skeleton height="80px" width="100%" />
                    </StyledTableCell>
                  ))}
                </TableRow>
              ))}
            </>
          )}
          {apiStatus === "success" && (
            <>
              {data.map((user: userData, i) => {
                let { email, firstname, lastname, role, access } = user;

                if (role === "question_setter") role = "Question Setter";
                if (role === "question_verifier") role = "Question Verifier";
                if (role === "examiner") role = "Examiner";

                return (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell>{i + 1}</StyledTableCell>
                    <StyledTableCell>
                      <CellWrapper flexDir="column" alignItem="flex-start">
                        <Text>{`${firstname} ${lastname}`}</Text>
                        <StyledChip label={role} />
                      </CellWrapper>
                    </StyledTableCell>
                    <StyledTableCell>{email}</StyledTableCell>
                    <StyledTableCell>
                      <CellWrapper>
                        {[...new Array(9)].map((_, i) => (
                          <TablePasswrodDotIcon key={i} w={16} h={16} />
                        ))}
                        <StyledIconButton>
                          {true ? (
                            <TablePasswordEyeOpenIcon />
                          ) : (
                            <TablePasswordEyeCloseIcon />
                          )}
                        </StyledIconButton>
                      </CellWrapper>
                    </StyledTableCell>
                    <StyledTableCell sx={{ maxWidth: "300px" }}>
                      <CellWrapper>
                        {access.map((value: string, i) => (
                          <XChip label={value} ml="10px" mt="10px" />
                        ))}
                      </CellWrapper>
                    </StyledTableCell>

                    <StyledTableCell>
                      <CellWrapper flexDir="column" alignItem="flex-start">
                        <XButton startIcon={<EditButtonIcon />}>Edit</XButton>
                        <XButton
                          startIcon={<RemoveButtonIcon />}
                          mt="10px"
                          textColor="#fff"
                          bgColor="#EF233C"
                        >
                          Remove
                        </XButton>
                      </CellWrapper>
                    </StyledTableCell>
                  </TableRow>
                );
              })}
            </>
          )}
        </StyledTableBody>
      </StyledTable>
    </TableWrapper>
  );
};

export default UserManagementTable;
