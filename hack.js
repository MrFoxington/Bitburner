export async function main(ns) {
    ns.print("Starting script here");
    ns.print(ns.args);           //The script arguments must be prefaced with ns as well
    await ns.hack("foodnstuff"); //Use Netscript hack function    
}   