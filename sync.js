const scripts = ['skynet.js', 'test.js'];
const url = 'https://raw.githubusercontent.com/MrFoxington/Bitburner/master/';

export async function main(ns) {

    if (ns.args.length == 0) {
        ns.tprint('Sync requires at least 1 argument');
        return;
    }

    ns.tprint("Starting Sync...");
    if (ns.args[0] == 'all') {
        await downloadList(ns, url, scripts);
    } else {
        await downloadList(ns, url, ns.args);
    }
    ns.tprint("Finished Sync");
}

async function downloadList(ns, url, names) {
    let promises = [];
    for (let i in names) {
        let name = names[i];
        promises.push(download(ns, url + name, name));
    }
    await Promise.allSettled(promises);
}

async function download(ns, url, name) {
    return ns.wget(url, name).then(data => {
        let txt = ""
        data ? txt = "Synced: " : txt = "Failed: ";
        ns.tprint(txt + name)
    });
}
