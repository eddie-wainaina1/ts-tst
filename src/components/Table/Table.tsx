import { Table, TableCell, TableContainer, TableRow, TableHead, TableBody } from "@mui/material"
import { AccountsTableProps, Columns,headers } from "./TableTypes"

// props to cloud accounts table expects
/*
Array<
Client Name ?
Account ID:
Islwmanaged:
OS:
Puppet:
SSM:
Monitoring(Pharos):
Monitoring(BAM):
Backups(Lifeline):
Patching(APS):
Threat Management(AlertLogic):
Log Management(AlertLogic):
Anti Virus(TrendMicroAV):
Network Protection(Trend MicroNetwork):
File Integrity Monitoring(Trend Micro):
Threat Stack:
Okta:
Automox:
>
*/

export const AWSAccountsTable = (props:AccountsTableProps)=>{
    const getRow = (acc:Columns)=>{
        return(
            <TableRow key={acc.AccountId}>
                
            </TableRow>
        )
    }
    return(
        <>
        <h3>Accounts Table</h3>
        <TableContainer>
        <Table stickyHeader>
            <TableHead>
            <TableRow id="headers">
                {headers.map(
                    header=><TableCell key={header}>
                        <strong>{header}</strong>
                        </TableCell>
                )}
            </TableRow>
            </TableHead>
            <TableBody>
                {props.accounts.map((acc:Columns)=>getRow(acc)
                )}
            </TableBody>

        </Table>
        </TableContainer>
        </>
    )
}