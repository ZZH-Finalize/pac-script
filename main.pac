const proxy = "PROXY 127.0.0.1:14622; PROXY 192.168.2.4:7890"

const proxyMap = {
    "google.com": proxy,
    "googleusercontent.com": proxy,
    // google play download
    "xn--ngstr-lra8j.com": proxy,

    "youtube.com": proxy,
    "googlevideo.com": proxy,
    "ytimg.com": proxy,
    "googleapis.com": proxy,
    "ggpht.com": proxy,

    "bing.com": proxy,
    "github.com": proxy,
    "githubusercontent.com": proxy,
    "microsoft.com": proxy,
    "msn.com": proxy,
    "azureedge.net": proxy,
    "azure.com": proxy,

    "openai.com": proxy,
    "chatgpt.com": proxy,

    "docker.com": proxy,

    "x.com": proxy,
    "twitter.com": proxy,
    "twimg.com": proxy,

    "facebook.com": proxy,

    "asuswrt-merlin.net": proxy,
    "immortalwrt.org": proxy,

    "huggingface.co": proxy,

    "crashlytics.com": proxy,
    "gdstudio.xyz": proxy,
    "gstatic.com": proxy,
    "avast.com": proxy,
    "allawnos.com": proxy,
    "loli.net": proxy,
    "adtidy.org": proxy,
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
