export interface Columns{
    ClientName?:string,
    AccountId:string,
    IsLWmanaged:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    OS:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    Puppet:"Unspecified"|"True"|"False"|"Ignore",
    SSM:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    Monitoring:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    Backups:"Unspecified"|"True"|"False"|"Ignore",
    Patching:"Unspecified"|"True"|"False"|"Ignore",
    Automox:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    ALThreatManagement:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    ThreatStack:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    ALLogManagement:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    TrendMicroAntiVirus:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    TMNetworkProtection:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    TMFileIntegrityMonitoring:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    Okta:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
    Environment: "Unspecified"|"True"|"False"|"Ignore"|"Custom",
    Role:"Unspecified"|"True"|"False"|"Ignore"|"Custom",
}

export const headers = [
    "OS Responsibility","Puppet",
    "SSM","Monitoring","Backups",
    "Patching","Automox",
    "Threat Management Alert Logic",
    "Threat Management Threat Stack",
    "Log Management Alert Logic",
    "Anti-Virus Trend Micro",
    "Network Protection Trend Micro",
    "File Integrity Monitoring Trend Micro",
    "I AM OKTA", "Environment", "Role"
]

export type AccountsTableProps = {
    accounts: any
    
}
export function convertToRows(profile:any){
    
}