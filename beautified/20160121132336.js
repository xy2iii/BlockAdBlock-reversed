;
var bbuCprGPoEis = '',
    hFvclgGfad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i < 12; i++) bbuCprGPoEis += hFvclgGfad.charAt(Math.floor(Math.random() * hFvclgGfad.length));
var bVmedZxCtF = 7;
window['' + bbuCprGPoEis + ''] = (function() {
    var n = {
        e$: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        encode: function(e) {
            var d = '',
                l, r, o, c, s, a, t, i = 0;
            e = n.i$(e);
            while (i < e.length) {
                l = e.charCodeAt(i++);
                r = e.charCodeAt(i++);
                o = e.charCodeAt(i++);
                c = l >> 2;
                s = (l & 3) << 4 | r >> 4;
                a = (r & 15) << 2 | o >> 6;
                t = o & 63;
                if (isNaN(r)) {
                    a = t = 64
                } else if (isNaN(o)) {
                    t = 64
                };
                d = d + this.e$.charAt(c) + this.e$.charAt(s) + this.e$.charAt(a) + this.e$.charAt(t)
            };
            return d
        },
        decode: function(e) {
            var t = '',
                l, s, d, c, r, o, a, i = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (i < e.length) {
                c = this.e$.indexOf(e.charAt(i++));
                r = this.e$.indexOf(e.charAt(i++));
                o = this.e$.indexOf(e.charAt(i++));
                a = this.e$.indexOf(e.charAt(i++));
                l = c << 2 | r >> 4;
                s = (r & 15) << 4 | o >> 2;
                d = (o & 3) << 6 | a;
                t = t + String.fromCharCode(l);
                if (o != 64) {
                    t = t + String.fromCharCode(s)
                };
                if (a != 64) {
                    t = t + String.fromCharCode(d)
                }
            };
            t = n.t$(t);
            return t
        },
        i$: function(e) {
            e = e.replace(/;/g, ';');
            var i = '';
            for (var n = 0; n < e.length; n++) {
                var t = e.charCodeAt(n);
                if (t < 128) {
                    i += String.fromCharCode(t)
                } else if (t > 127 && t < 2048) {
                    i += String.fromCharCode(t >> 6 | 192);
                    i += String.fromCharCode(t & 63 | 128)
                } else {
                    i += String.fromCharCode(t >> 12 | 224);
                    i += String.fromCharCode(t >> 6 & 63 | 128);
                    i += String.fromCharCode(t & 63 | 128)
                }
            };
            return i
        },
        t$: function(e) {
            var n = '',
                t = 0,
                i = c1 = c2 = 0;
            while (t < e.length) {
                i = e.charCodeAt(t);
                if (i < 128) {
                    n += String.fromCharCode(i);
                    t++
                } else if (i > 191 && i < 224) {
                    c2 = e.charCodeAt(t + 1);
                    n += String.fromCharCode((i & 31) << 6 | c2 & 63);
                    t += 2
                } else {
                    c2 = e.charCodeAt(t + 1);
                    c3 = e.charCodeAt(t + 2);
                    n += String.fromCharCode((i & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    t += 3
                }
            };
            return n
        }
    };
    var d = ['YWQtbGVmdA==', 'YWRCYW5uZXJXcmFw', 'YWQtZnJhbWU=', 'YWQtaGVhZGVy', 'YWQtaW1n', 'YWQtaW5uZXI=', 'YWQtbGFiZWw=', 'YWQtbGI=', 'YWQtZm9vdGVy', 'YWQtY29udGFpbmVy', 'YWQtY29udGFpbmVyLTE=', 'YWQtY29udGFpbmVyLTI=', 'QWQzMDB4MTQ1', 'QWQzMDB4MjUw', 'QWQ3Mjh4OTA=', 'QWRBcmVh', 'QWRGcmFtZTE=', 'QWRGcmFtZTI=', 'QWRGcmFtZTM=', 'QWRGcmFtZTQ=', 'QWRMYXllcjE=', 'QWRMYXllcjI=', 'QWRzX2dvb2dsZV8wMQ==', 'QWRzX2dvb2dsZV8wMg==', 'QWRzX2dvb2dsZV8wMw==', 'QWRzX2dvb2dsZV8wNA==', 'RGl2QWQ=', 'RGl2QWQx', 'RGl2QWQy', 'RGl2QWQz', 'RGl2QWRB', 'RGl2QWRC', 'RGl2QWRD', 'QWRJbWFnZQ==', 'QWREaXY=', 'QWRCb3gxNjA=', 'QWRDb250YWluZXI=', 'Z2xpbmtzd3JhcHBlcg==', 'YWRUZWFzZXI=', 'YmFubmVyX2Fk', 'YWRCYW5uZXI=', 'YWRiYW5uZXI=', 'YWRBZA==', 'YmFubmVyYWQ=', 'IGFkX2JveA==', 'IGFkX2NoYW5uZWw=', 'IGFkc2VydmVy', 'IGJhbm5lcmlk', 'YWRzbG90', 'cG9wdXBhZA==', 'YWRzZW5zZQ==', 'Z29vZ2xlX2Fk', 'b3V0YnJhaW4tcGFpZA==', 'c3BvbnNvcmVkX2xpbms='],
        y = Math.floor(Math.random() * d.length),
        b = n.decode(d[y]),
        m = b,
        A = 1,
        g = '#EEEEEE',
        t = '#777777',
        u = '#adb8ff',
        f = '#FFFFFF',
        v = '',
        h = 'Welcome!',
        p = 'It looks like you\'re using an ad blocker. That\'s okay.  Who doesn\'t?',
        c = 'But without advertising-income, we can\'t keep making this site awesome.',
        l = 'I understand, I have disabled my ad blocker.  Let me in!',
        o = 0,
        s = 0,
        i = 'moc.kcolbdakcolb',
        r = 0,
        a = e() + '.jpg';

    function e() {
        var t = '',
            e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 30; i++) t += e.charAt(Math.floor(Math.random() * e.length));
        return t
    };
    return {
        bab: function(t, d) {
            if (typeof document.body == 'undefined') {
                return
            };
            var i = '0.1',
                d = m,
                e = document.createElement('DIV');
            e.id = d;
            e.style.position = 'absolute';
            e.style.left = '-5000px';
            e.style.top = '-5000px';
            e.style.height = '60px';
            e.style.width = '468px';
            e.innerHTML = '<img src="http://doubleclick.net/' + a + '">';
            var s = document.body.childNodes,
                l = Math.floor(s.length / 2);
            if (l > 15) {
                var n = document.createElement('div');
                n.style.position = 'absolute';
                n.style.height = '0px';
                n.style.width = '0px';
                n.style.top = '-5000px';
                n.style.left = '-5000px';
                document.body.insertBefore(n, document.body.childNodes[l]);
                n.appendChild(e);
                var o = document.createElement('DIV');
                o.id = 'banner_ad';
                o.style.position = 'absolute';
                o.style.left = '-5000px';
                o.style.top = '-5000px';
                o.innerHTML = '<img src="http://doubleclick.net/' + a + '">';
                document.body.appendChild(o)
            } else {
                e.id = 'banner_ad';
                document.body.appendChild(e)
            };
            r = setInterval(function() {
                if (e) {
                    t((e.clientHeight == 0), i);
                    t((e.clientWidth == 0), i);
                    t((e.display == 'hidden'), i);
                    t((e.visibility == 'none'), i);
                    t((e.opacity == 0), i);
                    try {
                        t((document.getElementById('banner_ad').innerHTML.indexOf('click') == -1), i)
                    } catch (n) {}
                } else {
                    t(!0, i)
                }
            }, 1000)
        },
        aWKrsxQZha: function(e, t) {
            if ((e) && (o == 0)) {
                o = 1;
                window['' + bbuCprGPoEis + ''].NldiNtztiN()
            } else {}
        },
        NldiNtztiN: function() {
            if (s == 1) {
                var Q = sessionStorage.getItem('babn');
                if (Q > 0) {
                    return !0
                } else {
                    sessionStorage.setItem('babn', (Math.random() + 1) * 1000)
                }
            };
            clearInterval(r);
            document.body.innerHTML = '';
            document.body.style.margin = '0px';
            document.body.style.padding = '0px';
            var A = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
                m = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
                a = document.createElement('DIV'),
                y = e();
            a.id = y;
            a.style.position = 'fixed';
            a.style.left = '0';
            a.style.top = '0';
            a.style.width = A + 'px';
            a.style.height = m + 'px';
            a.style.backgroundColor = g;
            a.style.zIndex = '9999';
            document.body.appendChild(a);
            var d = '<a href="http://blockadblock.com"><svg id="FILLVECTID1" width="160" height="40"><image id="FILLVECTID2" width="160" height="40" xlink:href="data:image/png;base64,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">;</svg></a>';
            d = d.replace('FILLVECTID1', e());
            d = d.replace('FILLVECTID2', e());
            var o = document.createElement('DIV');
            o.innerHTML = d;
            o.style.position = 'absolute';
            o.style.bottom = '30px';
            o.style.left = '30px';
            o.style.width = '160px';
            o.style.height = '40px';
            o.style.zIndex = '10000';
            o.style.opacity = '.6';
            o.style.cursor = 'pointer';
            o.addEventListener('click', function() {
                i = i.split('').reverse().join('');
                window.location.href = 'http://' + i
            });
            document.getElementById(y).appendChild(o);
            var n = document.createElement('DIV'),
                C = e();
            n.id = C;
            n.style.position = 'fixed';
            n.style.top = m / 7 + 'px';
            n.style.minWidth = A - 120 + 'px';
            n.style.minHeight = m / 3.5 + 'px';
            n.style.backgroundColor = '#fff';
            n.style.zIndex = '10000';
            n.style.fontFamily = 'Arial Black, Helvetica, Verdana, sans-serif';
            n.style.fontSize = '16pt';
            n.style.textAlign = 'center';
            n.style.padding = '12px';
            n.style.display = 'block';
            n.style.marginLeft = '60px';
            n.style.marginRight = '60px';
            n.style.borderRadius = '15px';
            document.body.appendChild(n);
            n.style.boxShadow = '0px 14px 24px -8px rgba(0,0,0,0.3)';
            n.style.visibility = 'visible';
            var x = 30,
                v = 22,
                W = 18,
                b = 18;
            if (window.innerWidth < 420) {
                n.style.zoom = '50%';
                n.style.fontSize = '18pt';
                n.style.marginLeft = '45px;';
                o.style.zoom = '65%';
                var x = 36,
                    v = 27,
                    W = 22,
                    b = 22
            };
            n.innerHTML = '<h3 style="color:#999;font-size:' + x + 'pt;color:' + t + ';font-family:sans-serif;font-weight:200;">' + h + '</h3><h1 style="font-size:' + v + 'pt;font-weight:500;color:' + t + '">' + p + '</h1><hr style=" display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: auto; border:1px solid #CCC; width: 25%;"><p style="font-family:sans-serif;font-weight:300;font-size:' + W + 'pt;color:' + t + ';">' + c + '</p><p style="margin-top:35px;"><div onmouseover="this.style.opacity=.9;" onmouseout="this.style.opacity=1;"  id="' + e() + '" style="cursor:pointer;font-size:' + b + 'pt;font-family:sans-serif; font-weight:300;border-radius:15px;padding:10px;background-color:' + u + ';color:' + f + ';padding-left:60px;padding-right:60px;width:60%;margin:auto;" onclick="window.location.reload();">' + l + '</div></p>'
        }
    }
})();
document.body.style.visibility = 'visible';
if (document.getElementById('babasbmsgx')) {
    document.getElementById('babasbmsgx').style.visibility = 'hidden';
    document.getElementById('babasbmsgx').style.display = 'none'
};
setTimeout('window[\'\' + bbuCprGPoEis + \'\'].bab(window[\'\' + bbuCprGPoEis + \'\'].aWKrsxQZha, window[\'\' + bbuCprGPoEis + \'\'].bab_elementid)', bVmedZxCtF * 1000);