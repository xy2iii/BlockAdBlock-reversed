;
var ScHjoycvqRis = '',
    NatqjEWLmu = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i < 12; i++) ScHjoycvqRis += NatqjEWLmu.charAt(Math.floor(Math.random() * NatqjEWLmu.length));
var ATPMtImrDi = 7,
    aDefOne = 'no',
    aDefTwo = 'no';
window['' + ScHjoycvqRis + ''] = (function() {
    var e = {
        e$: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        encode: function(t) {
            var d = '',
                l, i, o, c, s, r, n, a = 0;
            t = e.n$(t);
            while (a < t.length) {
                l = t.charCodeAt(a++);
                i = t.charCodeAt(a++);
                o = t.charCodeAt(a++);
                c = l >> 2;
                s = (l & 3) << 4 | i >> 4;
                r = (i & 15) << 2 | o >> 6;
                n = o & 63;
                if (isNaN(i)) {
                    r = n = 64
                } else if (isNaN(o)) {
                    n = 64
                };
                d = d + this.e$.charAt(c) + this.e$.charAt(s) + this.e$.charAt(r) + this.e$.charAt(n)
            };
            return d
        },
        decode: function(t) {
            var n = '',
                l, s, d, c, i, o, r, a = 0;
            t = t.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (a < t.length) {
                c = this.e$.indexOf(t.charAt(a++));
                i = this.e$.indexOf(t.charAt(a++));
                o = this.e$.indexOf(t.charAt(a++));
                r = this.e$.indexOf(t.charAt(a++));
                l = c << 2 | i >> 4;
                s = (i & 15) << 4 | o >> 2;
                d = (o & 3) << 6 | r;
                n = n + String.fromCharCode(l);
                if (o != 64) {
                    n = n + String.fromCharCode(s)
                };
                if (r != 64) {
                    n = n + String.fromCharCode(d)
                }
            };
            n = e.t$(n);
            return n
        },
        n$: function(e) {
            e = e.replace(/;/g, ';');
            var n = '';
            for (var a = 0; a < e.length; a++) {
                var t = e.charCodeAt(a);
                if (t < 128) {
                    n += String.fromCharCode(t)
                } else if (t > 127 && t < 2048) {
                    n += String.fromCharCode(t >> 6 | 192);
                    n += String.fromCharCode(t & 63 | 128)
                } else {
                    n += String.fromCharCode(t >> 12 | 224);
                    n += String.fromCharCode(t >> 6 & 63 | 128);
                    n += String.fromCharCode(t & 63 | 128)
                }
            };
            return n
        },
        t$: function(e) {
            var a = '',
                t = 0,
                n = c1 = c2 = 0;
            while (t < e.length) {
                n = e.charCodeAt(t);
                if (n < 128) {
                    a += String.fromCharCode(n);
                    t++
                } else if (n > 191 && n < 224) {
                    c2 = e.charCodeAt(t + 1);
                    a += String.fromCharCode((n & 31) << 6 | c2 & 63);
                    t += 2
                } else {
                    c2 = e.charCodeAt(t + 1);
                    c3 = e.charCodeAt(t + 2);
                    a += String.fromCharCode((n & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    t += 3
                }
            };
            return a
        }
    };
    var r = ['YWQtbGVmdA==', 'YWRCYW5uZXJXcmFw', 'YWQtZnJhbWU=', 'YWQtaGVhZGVy', 'YWQtaW1n', 'YWQtaW5uZXI=', 'YWQtbGFiZWw=', 'YWQtbGI=', 'YWQtZm9vdGVy', 'YWQtY29udGFpbmVy', 'YWQtY29udGFpbmVyLTE=', 'YWQtY29udGFpbmVyLTI=', 'QWQzMDB4MTQ1', 'QWQzMDB4MjUw', 'QWQ3Mjh4OTA=', 'QWRBcmVh', 'QWRGcmFtZTE=', 'QWRGcmFtZTI=', 'QWRGcmFtZTM=', 'QWRGcmFtZTQ=', 'QWRMYXllcjE=', 'QWRMYXllcjI=', 'QWRzX2dvb2dsZV8wMQ==', 'QWRzX2dvb2dsZV8wMg==', 'QWRzX2dvb2dsZV8wMw==', 'QWRzX2dvb2dsZV8wNA==', 'RGl2QWQ=', 'RGl2QWQx', 'RGl2QWQy', 'RGl2QWQz', 'RGl2QWRB', 'RGl2QWRC', 'RGl2QWRD', 'QWRJbWFnZQ==', 'QWREaXY=', 'QWRCb3gxNjA=', 'QWRDb250YWluZXI=', 'Z2xpbmtzd3JhcHBlcg==', 'YWRUZWFzZXI=', 'YmFubmVyX2Fk', 'YWRCYW5uZXI=', 'YWRiYW5uZXI=', 'YWRBZA==', 'YmFubmVyYWQ=', 'IGFkX2JveA==', 'YWRfY2hhbm5lbA==', 'YWRzZXJ2ZXI=', 'YmFubmVyaWQ=', 'YWRzbG90', 'cG9wdXBhZA==', 'YWRzZW5zZQ==', 'Z29vZ2xlX2Fk', 'b3V0YnJhaW4tcGFpZA==', 'c3BvbnNvcmVkX2xpbms='],
        f = Math.floor(Math.random() * r.length),
        w = e.decode(r[f]),
        u = w,
        Q = 1,
        p = '#EEEEEE',
        i = '#777777',
        v = '#adb8ff',
        Y = '#FFFFFF',
        Z = '',
        W = 'Welcome!',
        g = 'It looks like you\'re using an ad blocker. That\'s okay.  Who doesn\'t?',
        y = 'But without advertising-income, we can\'t keep making this site awesome.',
        s = 'I understand, I have disabled my ad blocker.  Let me in!',
        o = 0,
        h = 0,
        a = 'moc.kcolbdakcolb',
        l = 0,
        A = n() + '.jpg';

    function b(e) {
        if (e) e = e.substr(e.length - 15);
        var n = document.getElementsByTagName('script');
        for (var a = n.length; a--;) {
            var t = String(n[a].src);
            if (t) t = t.substr(t.length - 15);
            if (t === e) return !0
        };
        return !1
    };

    function m(e) {
        if (e) e = e.substr(e.length - 15);
        var t = document.styleSheets;
        x = 0;
        while (x < t.length) {
            thisurl = t[x].href;
            if (thisurl) thisurl = thisurl.substr(thisurl.length - 15);
            if (thisurl === e) return !0;
            x++
        };
        return !1
    };

    function n(e) {
        var a = '',
            t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        e = e || 30;
        for (var n = 0; n < e; n++) a += t.charAt(Math.floor(Math.random() * t.length));
        return a
    };

    function t(t) {
        var o = ['YWRuLmViYXkuY29t', 'YWQubWFpbC5ydQ==', 'anVpY3lhZHMuY29t', 'YWQuZm94bmV0d29ya3MuY29t', 'cGFydG5lcmFkcy55c20ueWFob28uY29t', 'YS5saXZlc3BvcnRtZWRpYS5ldQ==', 'YWdvZGEubmV0L2Jhbm5lcnM=', 'YWR2ZXJ0aXNpbmcuYW9sLmNvbQ==', 'Y2FzLmNsaWNrYWJpbGl0eS5jb20=', 'cHJvbW90ZS5wYWlyLmNvbQ==', 'YWRzLnlhaG9vLmNvbQ==', 'YWRzLnp5bmdhLmNvbQ==', 'YWRzYXR0LmFiY25ld3Muc3RhcndhdmUuY29t', 'YWRzYXR0LmVzcG4uc3RhcndhdmUuY29t', 'YXMuaW5ib3guY29t', 'cGFydG5lcmFkcy55c20ueWFob28uY29t'],
            i = ['ZmF2aWNvbi5pY28=', 'YmFubmVyLmpwZw==', 'NDY4eDYwLmpwZw==', 'NzIweDkwLmpwZw==', 'c2t5c2NyYXBlci5qcGc=', 'MTM2N19hZC1jbGllbnRJRDI0NjQuanBn', 'YWRjbGllbnQtMDAyMTQ3LWhvc3QxLWJhbm5lci1hZC5qcGc=', 'Q0ROLTMzNC0xMDktMTM3eC1hZC1iYW5uZXI=', 'ZmF2aWNvbi5pY28=', 'YWQtbGFyZ2UucG5n', 'c3F1YXJlLWFkLnBuZw==', 'ZmF2aWNvbjEuaWNv', 'YmFubmVyX2FkLmdpZg==', 'bGFyZ2VfYmFubmVyLmdpZg==', 'd2lkZV9za3lzY3JhcGVyLmpwZw==', 'YWR2ZXJ0aXNlbWVudC0zNDMyMy5qcGc='];
        x = 0;
        spimg = [];
        while (x < t) {
            c = o[Math.floor(Math.random() * o.length)];
            d = i[Math.floor(Math.random() * i.length)];
            c = e.decode(c);
            d = e.decode(d);
            var r = Math.floor(Math.random() * 2) + 1;
            if (r == 1) {
                a = '//' + c + '/' + d
            } else {
                a = '//' + c + '/' + n(Math.floor(Math.random() * 20) + 4) + '.jpg'
            };
            spimg[x] = new Image();
            spimg[x].src = a;
            x++
        }
    };

    function M(e) {
        if (window.consolelog == 1) {
            console.log(e)
        }
    };
    return {
        bab: function(e, i) {
            if (typeof document.body == 'undefined') {
                return
            };
            var a = '0.1',
                i = u,
                t = document.createElement('DIV');
            t.id = i;
            t.style.position = 'absolute';
            t.style.left = '-5000px';
            t.style.top = '-5000px';
            t.style.height = '60px';
            t.style.width = '468px';
            var d = document.body.childNodes,
                r = Math.floor(d.length / 2);
            if (r > 15) {
                var n = document.createElement('div');
                n.style.position = 'absolute';
                n.style.height = '0px';
                n.style.width = '0px';
                n.style.top = '-5000px';
                n.style.left = '-5000px';
                document.body.insertBefore(n, document.body.childNodes[r]);
                n.appendChild(t);
                var o = document.createElement('DIV');
                o.id = 'banner_ad';
                o.style.position = 'absolute';
                o.style.left = '-5000px';
                o.style.top = '-5000px';
                document.body.appendChild(o)
            } else {
                t.id = 'banner_ad';
                document.body.appendChild(t)
            };
            l = setInterval(function() {
                if (t) {
                    e((t.clientHeight == 0), a);
                    e((t.clientWidth == 0), a);
                    e((t.display == 'hidden'), a);
                    e((t.visibility == 'none'), a);
                    e((t.opacity == 0), a)
                } else {
                    e(!0, a)
                }
            }, 1000)
        },
        rfKfOjqqag: function(n, h) {
            if ((n) && (o == 0)) {
                o = 1;
                t(Math.floor(Math.random() * 3) + 3);
                window['' + ScHjoycvqRis + ''].SImzSAYVWp();
                window['' + ScHjoycvqRis + ''].rfKfOjqqag = function() {
                    return
                }
            } else {
                var y = e.decode('aW5zLmFkc2J5Z29vZ2xl'),
                    l = document.querySelector(y);
                if ((l) && (o == 0)) {
                    if (aDefOne == 'yes') {
                        var d = 'Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM=';
                        d = e.decode(d);
                        if (b(d)) {
                            if (l.innerHTML.replace(/\s/g, '').length == 0) {
                                t(Math.floor(Math.random() * 3) + 3);
                                window['' + ScHjoycvqRis + ''].SImzSAYVWp()
                            }
                        }
                    };
                    o = 1
                } else {
                    var p = !1;
                    if (o == 0) {
                        if (aDefTwo == 'yes') {
                            if (!window['' + ScHjoycvqRis + ''].ranAlready) {
                                var r = ['Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw==', 'Ly93d3cuZ3N0YXRpYy5jb20vYWR4L2RvdWJsZWNsaWNrLmljbw==', 'Ly9hZHZlcnRpc2luZy55YWhvby5jb20vZmF2aWNvbi5pY28=', 'Ly9hZHMudHdpdHRlci5jb20vZmF2aWNvbi5pY28=', 'Ly93d3cuZG91YmxlY2xpY2tieWdvb2dsZS5jb20vZmF2aWNvbi5pY28='],
                                    s = r.length,
                                    i = r[Math.floor(Math.random() * s)],
                                    a = i;
                                while (i == a) {
                                    a = r[Math.floor(Math.random() * s)]
                                };
                                i = e.decode(i);
                                a = e.decode(a);
                                t(Math.floor(Math.random() * 2) + 1);
                                var m = new Image(),
                                    c = new Image();
                                m.onerror = function() {
                                    t(Math.floor(Math.random() * 2) + 1);
                                    c.src = a;
                                    t(Math.floor(Math.random() * 2) + 1)
                                };
                                c.onerror = function() {
                                    o = 1;
                                    t(Math.floor(Math.random() * 3) + 1);
                                    window['' + ScHjoycvqRis + ''].SImzSAYVWp()
                                };
                                m.src = i;
                                t(Math.floor(Math.random() * 3) + 1);
                                window['' + ScHjoycvqRis + ''].ranAlready = !0
                            };
                            window['' + ScHjoycvqRis + ''].rfKfOjqqag = function() {
                                return
                            }
                        }
                    }
                }
            }
        },
        SImzSAYVWp: function() {
            if (h == 1) {
                var Q = sessionStorage.getItem('babn');
                if (Q > 0) {
                    return !0
                } else {
                    sessionStorage.setItem('babn', (Math.random() + 1) * 1000)
                }
            };
            var c = 'Ly95dWkueWFob29hcGlzLmNvbS8zLjE4LjEvYnVpbGQvY3NzcmVzZXQvY3NzcmVzZXQtbWluLmNzcw==';
            c = e.decode(c);
            if (!m(c)) {
                var b = document.createElement('link');
                b.setAttribute('rel', 'stylesheet');
                b.setAttribute('type', 'text/css');
                b.setAttribute('href', c);
                document.getElementsByTagName('head')[0].appendChild(b)
            };
            clearInterval(l);
            document.body.innerHTML = '';
            document.body.style.cssText += 'margin:0px !important';
            document.body.style.cssText += 'padding:0px !important';
            var Z = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth,
                f = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight,
                r = document.createElement('DIV'),
                u = n();
            r.id = u;
            r.style.position = 'fixed';
            r.style.left = '0';
            r.style.top = '0';
            r.style.width = Z + 'px';
            r.style.height = f + 'px';
            r.style.backgroundColor = p;
            r.style.zIndex = '9999';
            document.body.appendChild(r);
            var d = '<a href="http://blockadblock.com"><svg id="FILLVECTID1" width="160" height="40"><image id="FILLVECTID2" width="160" height="40" xlink:href="data:image/png;base64,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">;</svg></a>';
            d = d.replace('FILLVECTID1', n());
            d = d.replace('FILLVECTID2', n());
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
                a = a.split('').reverse().join('');
                window.location.href = '//' + a
            });
            document.getElementById(u).appendChild(o);
            var t = document.createElement('DIV'),
                R = n();
            t.id = R;
            t.style.position = 'fixed';
            t.style.top = f / 7 + 'px';
            t.style.minWidth = Z - 120 + 'px';
            t.style.minHeight = f / 3.5 + 'px';
            t.style.backgroundColor = '#fff';
            t.style.zIndex = '10000';
            t.style.cssText += 'font-family: "Arial Black", Helvetica, geneva, sans-serif !important';
            t.style.cssText += 'line-height: normal !important';
            t.style.cssText += 'font-size: 16pt !important';
            t.style.cssText += 'text-align: center !important';
            t.style.cssText += 'padding: 12px !important';
            t.style.display += 'block';
            t.style.marginLeft = '60px';
            t.style.marginRight = '60px';
            t.style.borderRadius = '15px';
            document.body.appendChild(t);
            t.style.boxShadow = '0px 14px 24px -8px rgba(0,0,0,0.3)';
            t.style.visibility = 'visible';
            var w = 30,
                M = 22,
                x = 18,
                A = 18;
            if ((window.innerWidth < 640) || (screen.width < 640)) {
                t.style.zoom = '50%';
                t.style.cssText += 'font-size: 18pt !important';
                t.style.marginLeft = '45px;';
                o.style.zoom = '65%';
                var w = 36,
                    M = 27,
                    x = 22,
                    A = 22
            };
            t.innerHTML = '<h3 style="color:#999;font-size:' + w + 'pt;color:' + i + ';font-family:Helvetica, geneva, sans-serif;font-weight:200;margin-top:10px;margin-bottom:10px;text-align:center;">' + W + '</h3><h1 style="font-size:' + M + 'pt;font-weight:500;font-family:Helvetica, geneva, sans-serif;color:' + i + ';margin-top:10px;margin-bottom:10px;text-align:center;">' + g + '</h1><hr style=" display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: auto; border:1px solid #CCC; width: 25%;text-align:center;"><p style="font-family:Helvetica, geneva, sans-serif;font-weight:300;font-size:' + x + 'pt;color:' + i + ';text-align:center;">' + y + '</p><p style="margin-top:35px;"><div onmouseover="this.style.opacity=.9;" onmouseout="this.style.opacity=1;"  id="' + n() + '" style="cursor:pointer;font-size:' + A + 'pt;font-family:Helvetica, geneva, sans-serif; font-weight:300;border-radius:15px;padding:10px;background-color:' + v + ';color:' + Y + ';padding-left:60px;padding-right:60px;width:60%;margin:auto;margin-top:10px;margin-bottom:10px;" onclick="window.location.reload();">' + s + '</div></p>'
        }
    }
})();
if (document.body) {
    document.body.style.visibility = 'visible'
};
if (document.getElementById('babasbmsgx')) {
    document.getElementById('babasbmsgx').style.visibility = 'hidden';
    document.getElementById('babasbmsgx').style.display = 'none'
};
setTimeout('window[\'\' + ScHjoycvqRis + \'\'].bab(window[\'\' + ScHjoycvqRis + \'\'].rfKfOjqqag, window[\'\' + ScHjoycvqRis + \'\'].bab_elementid)', ATPMtImrDi * 1000);