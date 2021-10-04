const scripts = ['skynet.js'];
const url = 'https://raw.githubusercontent.com/MrFoxington/Bitburner/master/';

export async function main(ns) {

    if (ns.args.length == 0) {
        ns.tprint('Sync requires at least 1 argument');
        return;
    }
    ns.tprint("Starting Sync...");

    if (ns.args[0] == 'all') {
        await download(ns, url, scripts);
    } else {
        await download(ns, url, ns.args);
    }
}

async function download(ns, url, names) {
    names.forEach(async name => {
        await ns.wget(url + name, name);
        ns.tprint("Sync Complete: " + name);
    });
}