;
var nXjSolsBnois = '',
    ILbcsIYUFe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i < 12; i++) nXjSolsBnois += ILbcsIYUFe.charAt(Math.floor(Math.random() * ILbcsIYUFe.length));
var XsRxRmlBZB = 7;
window['' + nXjSolsBnois + ''] = (function() {
    var o = 'banner_ad',
        p = 1,
        c = '#EEEEEE',
        t = '#777777',
        y = '#adb8ff',
        b = '#FFFFFF',
        g = '',
        l = 'Welcome!',
        m = 'It looks like you\'re using an ad blocker. That\'s okay.  Who doesn\'t?',
        r = 'But without advertising-income, we can\'t keep making this site awesome.',
        d = 'I understand, I have disabled my ad blocker.  Let me in!',
        a = 0,
        s = 0,
        n = 'moc.kcolbdakcolb',
        i = 0;

    function e() {
        var t = '',
            e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var n = 0; n < 30; n++) t += e.charAt(Math.floor(Math.random() * e.length));
        return t
    };
    return {
        bab: function(n, d) {
            if (typeof document.body == 'undefined') {
                return
            };
            var a = '0.1',
                d = o ? o : 'banner_ad',
                t = document.createElement('DIV');
            t.id = d;
            t.style.position = 'absolute';
            t.style.left = '-999px';
            t.innerHTML = '<img src="http://doubleclick.net/' + e() + '.jpg">';
            t.appendChild(document.createTextNode('Â '));
            document.body.appendChild(t);
            i = setInterval(function() {
                if (t) {
                    n((t.clientHeight == 0), a);
                    n((t.clientWidth == 0), a);
                    n((t.display == 'hidden'), a);
                    n((t.visibility == 'none'), a);
                    n((t.opacity == 0), a);
                    try {
                        n((document.getElementById('banner_ad').innerHTML.indexOf('click') == -1), a)
                    } catch (e) {}
                } else {
                    n(!0, a)
                }
            }, 1000)
        },
        cutxRPbvdp: function(e, t) {
            if ((e) && (a == 0)) {
                a = 1;
                window['' + nXjSolsBnois + ''].pBzyuOKNpX()
            } else {}
        },
        pBzyuOKNpX: function() {
            if (s == 1) {
                var I = sessionStorage.getItem('babn');
                if (I > 0) {
                    return !0
                } else {
                    sessionStorage.setItem('babn', (Math.random() + 1) * 1000)
                }
            };
            clearInterval(i);
            document.body.innerHTML = '';
            var A = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
                h = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
                p = document.createElement('DIV'),
                v = e();
            p.id = v;
            p.style.position = 'fixed';
            p.style.left = '0';
            p.style.top = '0';
            p.style.width = A + 'px';
            p.style.height = h + 'px';
            p.style.backgroundColor = c;
            p.style.zIndex = '9999';
            document.body.appendChild(p);
            var g = '<a href="http://blockadblock.com"><svg id="FILLVECTID1" width="160" height="40"><image id="FILLVECTID2" width="160" height="40" xlink:href="data:image/png;base64,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">;</svg></a>';
            g = g.replace('FILLVECTID1', e());
            g = g.replace('FILLVECTID2', e());
            var a = document.createElement('DIV');
            a.innerHTML = g;
            a.style.position = 'absolute';
            a.style.bottom = '30px';
            a.style.left = '30px';
            a.style.width = '160px';
            a.style.height = '40px';
            a.style.zIndex = '10000';
            a.style.opacity = '.6';
            a.style.cursor = 'pointer';
            a.addEventListener('click', function() {
                n = n.split('').reverse().join('');
                window.location.href = 'http://' + n
            });
            document.getElementById(v).appendChild(a);
            var o = document.createElement('DIV'),
                w = e();
            o.id = w;
            o.style.position = 'fixed';
            o.style.top = h / 7 + 'px';
            o.style.minWidth = A - 120 + 'px';
            o.style.minHeight = h / 3.5 + 'px';
            o.style.backgroundColor = '#fff';
            o.style.zIndex = '10000';
            o.style.fontFamily = 'Arial Black, Helvetica, Verdana, sans-serif';
            o.style.fontSize = '16pt';
            o.style.textAlign = 'center';
            o.style.padding = '12px';
            o.style.display = 'block';
            o.style.marginLeft = '60px';
            o.style.marginRight = '60px';
            o.style.borderRadius = '15px';
            document.body.appendChild(o);
            o.style.boxShadow = '0px 14px 24px -8px rgba(0,0,0,0.3)';
            o.style.visibility = 'visible';
            var E = 30,
                u = 22,
                x = 18,
                f = 18;
            if (window.innerWidth < 420) {
                o.style.zoom = '50%';
                o.style.fontSize = '18pt';
                o.style.marginLeft = '45px;';
                a.style.zoom = '65%';
                var E = 36,
                    u = 27,
                    x = 22,
                    f = 22
            };
            o.innerHTML = '<h3 style="color:#999;font-size:' + E + 'pt;color:' + t + ';font-family:sans-serif;font-weight:200;">' + l + '</h3><h1 style="font-size:' + u + 'pt;font-weight:500;color:' + t + '">' + m + '</h1><hr style=" display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: auto; border:1px solid #CCC; width: 25%;"><p style="font-family:sans-serif;font-weight:300;font-size:' + x + 'pt;color:' + t + ';">' + r + '</p><p style="margin-top:35px;"><div onmouseover="this.style.opacity=.9;" onmouseout="this.style.opacity=1;"  id="' + e() + '" style="cursor:pointer;font-size:' + f + 'pt;font-family:sans-serif; font-weight:300;border-radius:15px;padding:10px;background-color:' + y + ';color:' + b + ';padding-left:60px;padding-right:60px;width:60%;margin:auto;" onclick="window.location.reload();">' + d + '</div></p>'
        }
    }
})();
document.body.style.visibility = 'visible';
if (document.getElementById('babasbmsgx')) {
    document.getElementById('babasbmsgx').style.visibility = 'hidden';
    document.getElementById('babasbmsgx').style.display = 'none'
};
setTimeout('window[\'\' + nXjSolsBnois + \'\'].bab(window[\'\' + nXjSolsBnois + \'\'].cutxRPbvdp, window[\'\' + nXjSolsBnois + \'\'].bab_elementid)', XsRxRmlBZB * 1000);