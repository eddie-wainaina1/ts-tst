export interface Columns{
    ClientName?:string,
    AccountId:string,
    Islwmanaged:"unspecified"|"true"|"false",
    OS:"unspecified"|"true"|"false",
    Puppet:"unspecified"|"true"|"false",
    SSM:"unspecified"|"true"|"false",
    PharosMonitoring:"unspecified"|"true"|"false",
    BAMMonitoring:"unspecified"|"true"|"false",
    LifelineBackups:"unspecified"|"true"|"false",
    APSPatching:"unspecified"|"true"|"false",
    AlertLogicThreatManagement:"unspecified"|"true"|"false",
    AlertLogicLogManagement:"unspecified"|"true"|"false",
    TrendMicroAntiVirus:"unspecified"|"true"|"false",
    TrendMicroNetworkProtection:"unspecified"|"true"|"false",
    TrendMicroFileIntegrityMonitoring:"unspecified"|"true"|"false",
    ThreatStack:"unspecified"|"true"|"false",
    Okta:"unspecified"|"true"|"false",
    Automox:"unspecified"|"true"|"false",
}
export const values = [
    "lw:managed",
    "lw:managed:os",
    "lw:managed:puppet",
    "lw:managed:ssm",
    "lw;managed:monitoring",
    "lw:managed:backups",
    "lw:managed:patching",
    "lw:managed:alertlogic:threat",
    "lw:managed:alertlogic:log",
    "lw:managed:trendmicro:av",
    "lw:managed:trendmicro:network",
    "lw:managed:trendmicro:fim",
    "lw:managed:threatstack",
    "lw:managed:okta",
    "lw:managed:automox"
]
export const headers = [
    "Account",
    "OS",
    "Puppet",
    "SSM",
    "Monitoring(Pharos)",
    "Monitoring(BAM)",
    "Backups(Lifeline)",
    "Patching(APS)",
    "Threat Management(Alert Logic)",
    "Log Management (Alert Logic)",
    "Anti Virus(Trend Micro)",
    "Network Protection(Trend Micro)",
    "File Integrity Monitoring(Trend Micro)",
    "Threat Stack",
    "Okta",
    "Automox"
]

export type AccountsTableProps = {
    accounts: any
}
export function convertToRows(profile:any){
    
}