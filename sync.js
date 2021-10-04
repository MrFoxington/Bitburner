const scripts = ['skynet.js'];
const url = 'https://raw.githubusercontent.com/MrFoxington/Bitburner/master/';
// TODO: Downloading scripts from different Branches
// Currently only master branch is available

// Downloads scripts from GitHub.
// Args: 'all' -> Downloads all available scripts
// Args: Can specify specific scripts to download by name.
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


// Downloads a list of names scripts from GitHub Master branch
// Built to handle async calls (BitBurner doesn't allow it)
async function downloadList(ns, url, names) {
    for (let i in names) {
        let name = names[i];
        await download(ns, url + name, name);
    }
}

// Downloads script from external website
// Build to handle async calls (BitBurner doesn't allow it)
async function download(ns, url, name) {
    return ns.wget(url, name).then(data => {
        let txt = ""
        data ? txt = "Synced: " : txt = "Failed: ";
        ns.tprint(txt + name)
    });
}