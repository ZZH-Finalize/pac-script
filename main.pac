const proxy = "PROXY 127.0.0.1:14622; PROXY 192.168.2.4:7892"

const proxyMap = {
    "google.com": proxy,

    "youtube.com": proxy,
    "googlevideo.com": proxy,
    "ytimg.com": proxy,

    "github.com": proxy,
    "githubusercontent.com": proxy,

    "docker.com": proxy,
    "x.com": proxy,
    "facebook.com": proxy,

    "gdstudio.xyz": proxy,
    "asuswrt-merlin.net": proxy,
    "loli.net": proxy,
};

function getBaseDomain(host) {
    var parts = host.split('.');
    if (parts.length <= 2) return host;
    return parts.slice(-2).join('.');
}

function FindProxyForURL(url, host) {
    var base = getBaseDomain(host);

    if (proxyMap.hasOwnProperty(base)) {
        return proxyMap[base];
    }

    return "DIRECT";
}
