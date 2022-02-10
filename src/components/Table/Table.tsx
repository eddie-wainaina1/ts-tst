import { Table, TableCell, TableContainer, TableRow, Divider, TableHead, TableBody } from "@mui/material"
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
            <TableRow style={{textAlign:"right"}}>
                <TableCell>{acc.AccountId}</TableCell>
                <TableCell>{acc.OS}</TableCell>
                <TableCell>{acc.Puppet}</TableCell>
                <TableCell>{acc.SSM}</TableCell>
                <TableCell>{acc.PharosMonitoring}</TableCell>
                <TableCell>{acc.BAMMonitoring}</TableCell>
                <TableCell>{acc.LifelineBackups}</TableCell>
                <TableCell>{acc.APSPatching}</TableCell>
                <TableCell>{acc.AlertLogicThreatManagement}</TableCell>
                <TableCell>{acc.AlertLogicLogManagement}</TableCell>
                <TableCell>{acc.TrendMicroAntiVirus}</TableCell>
                <TableCell>{acc.TrendMicroNetworkProtection}</TableCell>
                <TableCell>{acc.TrendMicroFileIntegrityMonitoring}</TableCell>
                <TableCell>{acc.ThreatStack}</TableCell>
                <TableCell> {acc.Okta}</TableCell>
                <TableCell>{acc.Automox}</TableCell>
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
            <Divider/>
            <TableBody>
                {props.accounts.map((acc:Columns)=>getRow(acc)
                )}
            </TableBody>

        </Table>
        </TableContainer>
        </>
    )
}