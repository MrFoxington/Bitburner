// TODO: Add List of Files to sync
// TODO: Add Ability to specify what file to sync
// TODO: Add Ability to sync all files
const scripts = ['skynet.js', ]
export async function main(ns) {
    ns.tprint("Starting Sync...");
    const url = 'https://raw.githubusercontent.com/MrFoxington/Bitburner/master/';

    if (ns.args.length == 0) {
        ns.tprint('Sync requires at least 1 argument');
        return;
    }

    if (ns.args[0] == 'all') {
        await download(ns, url, scripts);
    } else {
        await download(ns, url, ns.args);
    }
}

async function download(ns, url, names) {
    names.forEach(name => {
        await ns.wget(url + name, name);
        ns.tprint("Sync Complete: " + name);
    });
}