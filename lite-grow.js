export async function main(ns) {
    let [target = "", threads = 1, delay = 0] = ns.args;
    ns.print(target, threads, delay);
    await ns.grow(target, threads);
}