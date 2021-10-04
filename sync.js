export async function main(ns) {
    var url = "https://raw.githubusercontent.com/MrFoxington/Bitburner/master/skynet.js?token=ABAE635NGYB7QN337ITRI33BLKBTQ";
    var name = getNameFromUrl(url);
    downloadFile(url, name);
}

async function downloadFile(url, name) {
    await ns.wget(url, name);
}

function getNameFromUrl(url) {
    return url.substring(url.lastIndexOf('/') + 1, url.indexOf('?'));
}