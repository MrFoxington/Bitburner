export async function main(ns){
    let host = ns.args[0];

    if(ns.serverExists(host)) {
        ns.tprint("Stat Readout for " + host);
        ns.tprint("Hacking Req: " + ns.getServerRequiredHackingLevel(host));
        ns.tprint("Hacking Ports: " + ns.getServerNumPortsRequired(host));
        ns.tprint("Server Max Ram: " + ns.getServerMaxRam(host));
        ns.tprint("Server Used Ram: " + ns.getServerUsedRam(host));
        ns.tprint("Growth Rate: " + ns.getServerGrowth(host));
        ns.tprint("Hack %: " + ns.hackAnalyzePercent(host));
        ns.tprint("Max Money: " + ns.getServerMaxMoney(host));
        ns.tprint("Money: " + ns.getServerMoneyAvailable(host));
        ns.tprint("Min Security: " + ns.getServerMinSecurityLevel(host));
        ns.tprint("Security: " + ns.getServerSecurityLevel(host));
    } else {
        ns.tprint("Invalid Host: " + host);
    }
}
