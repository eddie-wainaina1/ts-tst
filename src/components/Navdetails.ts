interface UIInterface{
    title: string,
    description: string,
    url: string
}

const Pharos: UIInterface = {
    title: "Pharos UI",
    description: "View and modify Pharos Azure Monitoring configurations without the hassle",
    url: "https://w-pharos-ui.azurewebsites.net"
}

const BAM: UIInterface = {
    title: "BAM UI",
    description: "BAM UI is a way of graphically viewing, creating and editing BAM configurations. Using BAM UI you can define the way many aspects of azure monitoring are handled by the BAM system",
    url: "https://bam-ui.azurewebsites.net"
}
const CAPO: UIInterface = {
    title: "CAPO UI",
    description: "Coming Soon",
    url: "https://#.azurewebsites.net"
}

export{
    Pharos, BAM, CAPO
}