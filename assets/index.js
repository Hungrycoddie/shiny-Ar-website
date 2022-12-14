const It = function() {
    const t = document.createElement("link")
        .relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
    new MutationObserver
        (o => {
            for (const r of o)
                if (r.type === "childList")
                    for (const s of r.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && a(s)
        })
        .observe(document, {
            childList: !0
            , subtree: !0
        });
    
    function i(o) {
        const r = {};
        return o.integrity && (
                r.integrity = o.integrity), o.referrerpolicy && (r.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ?
            r.credentials = "include" : o.crossorigin === "anonymous" ?
            r.credentials = "omit" : r.credentials = "same-origin", r
    }
    
    function a(o) {
        if (o.ep) return;
        o.ep = !0;
        const r = i(o);
        fetch(o.href, r)
    }
};

It();

function S() {}

function Ct(e)

{
    return e()
}

function ut() {
    return Object.create(null)
}

function at(e) {
    e.forEach(Ct)
}

function Nt(e) {
    return typeof e == "function"
}

function K(e, t) {
    return e != e ? t == t : e !== t || e && typeof
    e == "object" || typeof e == "function"
}

let ot;

function mt(e, t) {
    return ot || (ot = document.createElement("a")), ot.href = t, e === ot.href
}

function Ot(e) {
    return Object.keys(e)
        .length === 0
}

function Ht(e, ...t) {
    if (e == null) return S;
    const i = e.subscribe(...t);
    return i.unsubscribe ? () => i.unsubscribe() : i
}

function Ft(e, t, i) {
    e.$$.on_destroy.push(Ht(t, i))
}

function c(e, t) {
    e.appendChild(t)
}

function j(e, t, i) {
    e.insertBefore(t, i || null)
}

function _(e) {
    e.parentNode.removeChild(e)
}

function it(e, t) {
    for (let i = 0; i < e.length; i += 1) e[i] && e[i].d(t)
}

function f(e) {
    return document.createElement(e)
}

function H(e) {
    return document.createTextNode(e)
}

function x() {
    return H(" ")
}

function Xt() {
    return H("")
}

function G(e, t, i, a) {
    return e.addEventListener(t, i, a), () => e.removeEventListener(t, i, a)
}

function n(e, t, i) {
    i == null ? e.removeAttribute(t) : e.getAttribute(t) !== i && e.setAttribute(t, i)
}

function Lt(e, t, i) {
    t in e ? e[t] = typeof e[t] == "boolean" && i === "" ? !0 : i : n(e, t, i)
}

function qt(e) {
    return Array.from(e.childNodes)
}
let gt;

function et(e) {
    gt = e
}
const tt = []
    , bt = []
    , lt = []
    , ht = []
    , Pt = Promise.resolve();
let pt = !1;

function Kt() {
    pt || (pt = !0, Pt.then(At))
}

function dt(e) {
    lt.push(e)
}
const ct = new Set;
let rt = 0;

function At() {
    const e = gt;
    do {
        for (; rt < tt.length;) {
            const t = tt[rt];
            rt++, et(t), Wt(t.$$)
        }
        for (et(null), tt.length = 0, rt = 0; bt.length;) bt.pop()();
        for (let t = 0; t < lt.length; t += 1) {
            const i = lt[t];
            ct.has(i) || (ct.add(i), i())
        }
        lt.length = 0
    }
    while (tt.length);
    for (; ht.length;) ht.pop()();
    pt = !1, ct.clear(), et(e)
}

function Wt(e) {
    if (e.fragment !== null) {
        e.update(), at(e.before_update);
        const t = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(dt)
    }
}
const st = new Set;
let Bt;

function F(e, t) {
    e && e.i && (st.delete(e), e.i(t))
}

function B(e, t, i, a) {
    if (e && e.o) {
        if (st.has(e)) return;
        st.add(e), Bt.c.push(() => {
            st.delete(e), a && (i && e.d(1), a())
        }), e.o(t)
    }
}

function D(e) {
    e && e.c()
}

function X(e, t, i, a) {
    const {
        fragment: o
        , on_mount: r
        , on_destroy: s
        , after_update: l
    } = e.$$;
    o && o.m(t, i), a || dt(() => {
        const p = r.map(Ct)
            .filter(Nt);
        s ? s.push(...p) : at(p), e.$$.on_mount = []
    }), l.forEach(dt)
}

function q(e, t) {
    const i = e.$$;
    i.fragment !== null && (at(i.on_destroy), i.fragment && i.fragment.d(t), i.on_destroy = i.fragment = null, i.ctx = [])
}

function Dt(e, t) {
    e.$$.dirty[0] === -1 && (tt.push(e), Kt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function J(e, t, i, a, o, r, s, l = [-1]) {
    const p = gt;
    et(e);
    const d = e.$$ = {
        fragment: null
        , ctx: null
        , props: r
        , update: S
        , not_equal: o
        , bound: ut()
        , on_mount: []
        , on_destroy: []
        , on_disconnect: []
        , before_update: []
        , after_update: []
        , context: new Map(t.context || (p ? p.$$.context : []))
        , callbacks: ut()
        , dirty: l
        , skip_bound: !1
        , root: t.target || p.$$.root
    };
    s && s(d.root);
    let u = !1;
    if (d.ctx = i ? i(e, t.props || {}, (m, b, ...g) => {
            const h = g.length ? g[0] : b;
            return d.ctx && o(d.ctx[m], d.ctx[m] = h) && (!d.skip_bound && d.bound[m] && d.bound[m](h), u && Dt(e, m)), b
        }) : [], d.update(), u = !0, at(d.before_update), d.fragment = a ? a(d.ctx) : !1, t.target) {
        if (t.hydrate) {
            const m = qt(t.target);
            d.fragment && d.fragment.l(m), m.forEach(_)
        } else d.fragment && d.fragment.c();
        t.intro && F(e.$$.fragment), X(e, t.target, t.anchor, t.customElement), At()
    }
    et(p)
}
class R {
    $destroy() {
        q(this, 1), this.$destroy = S
    }
    $on(t, i) {
        const a = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return a.push(i), () => {
            const o = a.indexOf(i);
            o !== -1 && a.splice(o, 1)
        }
    }
    $set(t) {
        this.$$set && !Ot(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const Y = [];

function Jt(e, t = S) {
    let i;
    const a = new Set;
    
    function o(l) {
        if (K(e, l) && (e = l, i)) {
            const p = !Y.length;
            for (const d of a) d[1](), Y.push(d, e);
            if (p) {
                for (let d = 0; d < Y.length; d += 2)
                    Y[d][0](Y[d + 1]);
                Y.length = 0
            }
        }
    }
    
    function r(l) {
        o(l(e))
    }
    
    function s(l, p = S) {
        const d = [l, p];
        return a.add(d), a.size === 1 && (i = t(o) || S), l(e), () => {
            a.delete(d), a.size === 0 && (i(), i = null)
        }
    }
    return {
        set: o
        , update: r
        , subscribe: s
    }
}
const Et = Jt({
        about: "active"
        , resume: "deactive"
        , portfolio: "deactive"
        , blog: "deactive"
        , contact: "deactive"
    })
    , ft = ["all", "web", "app", "ai", "other", "coming soon"]

    , xt = [{
            datacategory: "web"
            , src: "/images/Bmical.png"
            , alt: "BMI Calculator"
            , target: "/portfolio/BMI calculator/index.html"
        },
        
        {
            datacategory: "web"
            , src: "/images/registration.png"
            , alt: "Regestration Form"
            , target: "/portfolio/Regestration form /index.html"
        },
        
        {
            datacategory: "web"
            , src: "/images/ToDo.png"
            , alt: "To Do List"
            , target: "/portfolio/todolist/index.html"
        },
        
        {
            datacategory: "web"
            , src: "/images/cityskyline.png"
            , alt: "City Skyline Design"
            , target: "/portfolio/cityskyline/index.html"
        },
        
        {
            datacategory: "web"
            , src: "/images/Techdoc.png"
            , alt: "Tech Documentation"
            , target: "/portfolio/Tech Documentation page/index.html"
        },
        
        {
            datacategory: "other"
            , src: "/images/hotelmenu.png"
            , alt: "Hotel Menu"
            , target: "/portfolio/csshotelmenu/index.html"
        },
        
        {
            datacategory: "other"
            , src: "/images/o-balancesheet.png"
            , alt: "Balancesheet "
            , target: "/portfolio/balance sheet/index.html"
        },
        
        {
            datacategory: "web"
            , src: "/images/alarm.png"
            , alt: "Alarm Clock"
            , target: "/portfolio/Alarm Clock in JavaScript/index.html"
        },
        
        {
            datacategory: "web"
            , src: "/images/BG color.png"
            , alt: "Background Color Changer & Glow Buttons + icons"
            , target: "/portfolio/Background changer, Hower & Glow Buttons /index.html"
        },
        
        {
            datacategory: "web"
            , src: "/images/Quote.png"
            , alt: "Random Quote Generator"
            , target: "/portfolio/Quote Generator/index.html"
        },
        
        {
            datacategory: "coming soon"
            , src: "/images/catapp.png"
            , alt: "Cat App"
            , target: "/portfolio/catAppproject/index.html"
        }
        
        
    
    , ]
    , P = {
        name: "Arun Raj"
        , email: "riderarunraj@gmail.com"
        , phone: "(+91) 909-408-1117"
        , role: "Full Stack Developer"
        , linkedin: "https://www.linkedin.com/in/arun-raj-19a48b93"
        , github: "https://github.com/Hungrycoddie"
        , twitter: "https://twitter.com/arunrajrider"
        , instagram: "https://www.instagram.com/arun05raj/"
        , youtube: "https://www.youtube.com"
        , whatsapp: "https://wa.me/qr/LTLX5XLIZSIMK1"
        , telegram: "(+91) 934-404-4295"
        , location: "Chennai, Tamil Nadu, IN."
    },
    
    nt = {
        profile: [{
                icon: "mail-outline"
                , name: "Email"
                , value: P.email
            },
            
            {
                icon: "call-outline"
                , name: "phone"
                , value: P.phone
            },
            
            {
                icon: "location-outline"
                , name: "location"
                , value: P.location
            },
            
            {
                icon: "paper-plane-outline"
                , name: "telegram"
                , value: P.telegram
            }
        ]
        , social: [{
                icon: "logo-linkedin"
                , value: P.linkedin
            },
            
            {
                icon: "logo-twitter"
                , value: P.twitter
            },
            
            {
                icon: "logo-instagram"
                , value: P.instagram
            },
            
            {
                icon: "logo-github"
                , value: P.github
            },
            
            {
                icon: "logo-youtube"
                , value: P.youtube
            },
            
            {
                icon: "logo-whatsapp"
                , value: P.whatsapp
            }
        ]
    };

function Rt(e) {
    let t;
    return {
        c() {
            t = f("button"), t.innerHTML = `<ion-icon name="paper-plane">
                                            </ion-icon>
                                            <span>Send Message</span>`, n(t, "class", "form-btn"), n(t, "type", "submit"), t.disabled = !0, n(t, "data-form-btn", "")
        },
        
        m(i, a) {
            
            j(i, t, a)
        }
        , d(i) {
            i && _(t)
        }
    }
}

function Ut(e) {
    let t;
    
    return {
        c() {
            t = f("button"), t.innerHTML = `<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>`, n(t, "class", "form-btn"), n(t, "type", "submit"), n(t, "data-form-btn", "")
        },
        
        m(i, a) {
            j(i, t, a)
        }
        , d(i) {
            i && _(t)
        }
    }
}

function Zt(e) {
    let t, i, a, o, r, s, l, p, d, u, m, b, g, h, L, $, A;
    
    function N(v, z) {
        return v[3] && v[4] && v[5] ? Ut : Rt
    }
    let C = N(e)
        , M = C(e);
    return {
        c() {
            t = f("header"), t.innerHTML = '<h2 class="h2 article-title">Contact</h2>', i = x(), a = f("section"), a.innerHTML = '<figure><iframe title="google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502964.51010808954!2d76.02072330106692!3d9.982931412200601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1657221279902!5m2!1sen!2sin"width="400" height="300" loading="lazy"></iframe></figure>', o = x(), r = f("section"), s = f("h3"), s.textContent = "Contact Form", l = x(), p = f("form"), d = f("div"), u = f("input"), m = x(), b = f("input"), g = x(), h = f("textarea"), L = x(), M.c(), n(a, "class", "mapbox"), n(a, "data-mapbox", ""), n(s, "class", "h3 form-title"), u.value = e[1], n(u, "type", "text"), n(u, "name", "fullname"), n(u, "class", "form-input"), n(u, "placeholder", "Full name"), u.required = !0, n(u, "data-form-input", ""), b.value = e[0], n(b, "type", "email"), n(b, "name", "email"), n(b, "class", "form-input"), n(b, "placeholder", "Email address"), b.required = !0, n(b, "data-form-input", ""), n(d, "class", "input-wrapper"), h.value = e[2], n(h, "name", "message"), n(h, "class", "form-input"), n(h, "placeholder", "Your Message"), h.required = !0, n(h, "data-form-input", ""), n(p, "action", "https://formspree.io/f/mjvzobkv"), n(p, "method", "POST"), n(p, "class", "form"), n(p, "data-form", ""), n(r, "class", "contact-form")
        }
        , m(v, z) {
            j(v, t, z), j(v, i, z), j(v, a, z), j(v, o, z), j(v, r, z), c(r, s), c(r, l), c(r, p), c(p, d), c(d, u), c(d, m), c(d, b), c(p, g), c(p, h), c(p, L), M.m(p, null), $ || (A = [G(u, "input", e[7])
                                
                , G(b, "input", e[6])

                , G(h, "input", e[8])
                ], $ = !0)
        }
        , p(v, [z]) {
            z & 2 && u.value !== v[1] && (u.value = v[1]), z & 1 && b.value !== v[0] && (b.value = v[0]), z & 4 && (h.value = v[2]), C !== (C = N(v)) && (M.d(1), M = C(v), M && (M.c(), M.m(p, null)))
        }
        , i: S
        , o: S
        , d(v) {
            v && _(t), v && _(i), v && _(a), v && _(o), v && _(r), M.d(), $ = !1, at(A)
        }
    }
}

function Vt(e, t, i) {
    let a = null
        , o = null
        , r = null
        , s = !1
        , l = !1
        , p = !1;
    
    function d(b) {
        i(0, a = b.target.value), a && !!a.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? i(3, s = !0) : i(3, s = !1)
    }
    
    function u(b) {
        i(1, o = b.target.value), o ? i(4, l = !0) : i(4, l = !1)
    }
    
    function m(b) {
        i(2, r = b.target.value), r ? i(5, p = !0) : i(5, p = !1)
    }
    return [a, o, r, s, l, p, d, u, m]
}
class Tt extends R {
    constructor(t) {
        super(), J(this, t, Vt, Zt, K, {})
    }
}

function Yt(e) {
    let t, i, a, o, r, s;
    return r = new Tt({}), {
        c() {
            t = f("header"), t.innerHTML = '<h2 class="h2 article-title">About me</h2>', i = x(), a = f("section"), a.innerHTML = `<p>Im a passionate student who loves building projects, sharing
                                            knowledge and contributing to the Open Source Community. I enjoy the art of
                                            learning and then using it in my day to day life.</p> 
                                        
                                          <p>My skills are most proficient in Developing  Deploying Apps and Websites
                                            with Html 5, css, Javascript, Bootstrap, Flask, and what not?.........to be as a developer,
                                            but I consider working with these as aside hassel. I am always looking to improve my skills and learn new things.
                                            And even though I am not very strong at it, I would love to work on ML & AI
                                            related projects more. But more than that my interests are in building
                                        something that would benefit everyone equally. and make HUMAN KIND Proud. </p>`, o = x(), D(r.$$.fragment), n(a, "class", "about-text")
        }
        , m(l, p) {
            j(l, t, p), j(l, i, p), j(l, a, p), j(l, o, p), X(r, l, p), s = !0
        }
        , p: S
        , i(l) {
            s || (F(r.$$.fragment, l), s = !0)
        }
        , o(l) {
            B(r.$$.fragment, l), s = !1
        }
        , d(l) {
            l && _(t), l && _(i), l && _(a), l && _(o), q(r, l)
        }
    }
}
class Gt extends R {
    constructor(t) {
        super(), J(this, t, null, Yt, K, {})
    }
}

function vt(e, t, i) {
    const a = e.slice();
    return a[3] = t[i], a
}

function Qt(e) {
    let t, i, a = e[3] + ""
        , o, r;
    return {
        c() {
            t = f("li"), i = f("button"), o = H(a), r = x(), n(i, "class", "navbar-link active"), n(i, "data-nav-link", ""), n(t, "class", "navbar-item")
        }
        , m(s, l) {
            j(s, t, l), c(t, i), c(i, o), c(t, r)
        }
        , p: S
        , d(s) {
            s && _(t)
        }
    }
}

function te(e) {
    let t, i, a = e[3] + ""
        , o, r, s, l;
    return {
        c() {
            t = f("li"), i = f("button"), o = H(a), r = x(), n(i, "class", "navbar-link"), n(i, "data-nav-link", ""), n(t, "class", "navbar-item")
        }
        , m(p, d) {
            j(p, t, d), c(t, i), c(i, o), c(t, r), s || (l = G(i, "click", e[2]), s = !0)
        }
        , p: S
        , d(p) {
            p && _(t), s = !1, l()
        }
    }
}

function wt(e) {
    let t;
    
    function i(r, s) {
        return r[3] !== r[0] ? te : Qt
    }
    let a = i(e)
        , o = a(e);
    return {
        c() {
            o.c(), t = Xt()
        }
        , m(r, s) {
            o.m(r, s), j(r, t, s)
        }
        , p(r, s) {
            a === (a = i(r)) && o ? o.p(r, s) : (o.d(1), o = a(r), o && (o.c(), o.m(t.parentNode, t)))
        }
        , d(r) {
            o.d(r), r && _(t)
        }
    }
}

function ee(e) {
    let t, i, a = e[1]
        , o = [];
    for (let r = 0; r < a.length; r += 1) o[r] = wt(vt(e, a, r));
    return {
        c() {
            t = f("nav"), i = f("ul");
            for (let r = 0; r < o.length; r += 1) o[r].c();
            n(i, "class", "navbar-list"), n(t, "class", "navbar")
        }
        , m(r, s) {
            j(r, t, s), c(t, i);
            for (let l = 0; l < o.length; l += 1) o[l].m(i, null)
        }
        , p(r, [s]) {
            if (s & 7) {
                a = r[1];
                let l;
                for (l = 0; l < a.length; l += 1) {
                    const p = vt(r, a, l);
                    o[l] ? o[l].p(p, s) : (o[l] = wt(p), o[l].c(), o[l].m(i, null))
                }
                for (; l < o.length; l += 1) o[l].d(1);
                o.length = a.length
            }
        }
        , i: S
        , o: S
        , d(r) {
            r && _(t), it(o, r)
        }
    }
}

function ie(e, t, i) {
    let a = "About"
        , o = ["About", "Resume", "Portfolio"];
    
    function r(s) {
        Et.update(l => (l[a.toLowerCase()] = "deactive", l[s.target.innerText.toLowerCase()] = "active", l)), i(0, a = s.target.textContent)
    }
    return [a, o, r]
}
class ae extends R {
    constructor(t) {
        super(), J(this, t, ie, ee, K, {})
    }
}

function yt(e, t, i) {
    const a = e.slice();
    return a[3] = t[i], a[5] = i, a
}

function _t(e, t, i) {
    const a = e.slice();
    return a[3] = t[i], a
}

function kt(e) {
    let t, i, a = e[3] + ""
        , o, r, s, l, p;
    return {
        c() {
            t = f("li"), i = f("button"), o = H(a), s = x(), n(i, "class", r = e[0] === e[3] ? "active" : ""), n(i, "data-filter-btn", ""), n(t, "class", "filter-item")
        }
        , m(d, u) {
            j(d, t, u), c(t, i), c(i, o), c(t, s), l || (p = G(i, "click", e[1]), l = !0)
        }
        , p(d, u) {
            u & 1 && r !== (r = d[0] === d[3] ? "active" : "") && n(i, "class", r)
        }
        , d(d) {
            d && _(t), l = !1, p()
        }
    }
}

function jt(e) {
    let t, i, a, o, r, s, l = e[5] + 1 + ""
        , p, d, u, m, b, g, h, L = e[3].alt + ""
        , $, A, N, C = e[3].datacategory + ""
        , M, v, z, w, O;
    return {
        c() {
            t = f("li"), i = f("a"), a = f("figure"), o = f("div"), o.innerHTML = '<ion-icon name="eye-outline"></ion-icon>', r = x(), s = f("div"), p = H(l), d = x(), u = f("img"), g = x(), h = f("h3"), $ = H(L), A = x(), N = f("p"), M = H(C), z = x(), n(o, "class", "project-item-icon-box"), n(s, "class", "modal-close-btn"), mt(u.src, m = e[3].src) || n(u, "src", m), n(u, "alt", b = e[3].alt), n(u, "loading", "lazy"), n(a, "class", "project-img"), n(h, "class", "project-title"), n(N, "class", "project-category"), n(i, "href", v = e[3].target !== "" ? e[3].target : "#"), n(i, "target", "_blank"), n(t, "class", w = "project-item " + (e[0] === "other" && !e[2].has(e[3].datacategory) || e[3].datacategory === e[0] || e[0] === "all" ? "active" : "")), n(t, "data-filter-item", ""), n(t, "data-category", O = e[3].datacategory)
        }
        , m(E, U) {
            j(E, t, U), c(t, i), c(i, a), c(a, o), c(a, r), c(a, s), c(s, p), c(a, d), c(a, u), c(i, g), c(i, h), c(h, $), c(i, A), c(i, N), c(N, M), c(t, z)
        }
        , p(E, U) {
            U & 1 && w !== (w = "project-item " +
                    (E[0] === "other" && !E[2].has(E[3].datacategory) ||
                        E[3].datacategory === E[0] || E[0] === "all" ? "active" : "")) &&
                n(t, "class", w)
        }
        , d(E) {
            E && _(t)
        }
    }
}

function oe(e) {
    let
        t, i, a, o, r, s, l = ft
        , p = [];
    for (let m = 0; m < l.length; m += 1) p[m] = kt(_t(e, l, m));
    let d = xt
        , u = [];
    for (let m = 0; m < d.length; m += 1) u[m] = jt(yt(e, d, m));
    return {
        c() {
            t = f("header"), t.innerHTML = '<h2 class="h2 article-title">Portfolio</h2>', i = x(), a = f("section"), o = f("ul");
            for (let m = 0; m < p.length; m += 1) p[m].c();
            r = x(), s = f("ul");
            for (let m = 0; m < u.length; m += 1) u[m].c();
            n(o, "class", "filter-list"), n(s, "class", "project-list"), n(a, "class", "projects")
        }
        , m(m, b) {
            j(m, t, b), j(m, i, b), j(m, a, b), c(a, o);
            for (let g = 0; g < p.length; g += 1) p[g].m(o, null);
            c(a, r), c(a, s);
            for (let g = 0; g < u.length; g += 1) u[g].m(s, null)
        }
        , p(m, [b]) {
            if (b & 3) {
                l = ft;
                let g;
                for (g = 0; g < l.length; g += 1) {
                    const h = _t(m, l, g);
                    p[g] ? p[g].p(h, b) : (p[g] = kt(h), p[g].c(), p[g].m(o, null))
                }
                for (; g < p.length; g += 1) p[g].d(1);
                p.length = l.length
            }
            if (b & 5) {
                d = xt;
                let g;
                for (g = 0; g < d.length; g += 1) {
                    const h = yt(m, d, g);
                    u[g] ? u[g].p(h, b) : (u[g] = jt(h), u[g].c(), u[g].m(s, null))
                }
                for (; g < u.length; g += 1) u[g].d(1);
                u.length = d.length
            }
        }
        , i: S
        , o: S
        , d(m) {
            m && _(t), m && _(i), m && _(a), it(p, m), it(u, m)
        }
    }
}

function re(e, t, i) {
    let a = "all";
    const o = s => i(0, a = s.target.innerText.toLowerCase())
        , r = new Set(ft);
    return [a, o, r]
}
class ne extends R {
    constructor(t) {
        super(), J(this, t, re, oe, K, {})
    }
}

function le(e) {
    let t, i, a, o;
    return {
        c() {
            t = f("header"), t.innerHTML = '<h2 class="h2 article-title">Resume</h2>', i = x(), a = f("iframe"), n(a, "title", "pdf"), mt(a.src, o = "/docs/resume.pdf") ||
                n(a, "src", o), n(a, "frameborder", "0"), n(a, "scrolling", "auto"), n(a, "height", "1190px"), n(a, "width", "100%")
        }
        , m(r, s) {
            j(r, t, s), j(r, i, s), j(r, a, s)
        }
        , p: S
        , i: S
        , o: S
        , d(r) {
            r && _(t), r && _(i), r && _(a)
        }
    }
}
class se extends R {
    constructor(t) {
        super(), J(this, t, null, le, K, {})
    }
}

function $t(e, t, i) {
    const a = e.slice();
    return a[2] = t[i], a
}

function zt(e, t, i) {
    const a = e.slice();
    return a[2] = t[i], a
}

function St(e) {
    let t, i, a, o, r, s, l, p = e[2].name + ""
        , d, u, m, b = e[2].value + ""
        , g, h;
    return {
        c() {
            t = f("li"), i = f("div"), a = f("ion-icon"), r = x(), s = f("div"), l = f("p"), d = H(p), u = x(), m = f("p"), g = H(b), h = x(), Lt(a, "name", o = e[2].icon), n(i, "class", "icon-box"), n(l, "class", "contact-title"), n(m, "class", "contact-link"), n(s, "class", "contact-info"), n(t, "class", "contact-item")
        }
        , m(L, $) {
            j(L, t, $), c(t, i), c(i, a), c(t, r), c(t, s), c(s, l), c(l, d), c(s, u), c(s, m), c(m, g), c(t, h)
        }
        , p: S
        , d(L) {
            L && _(t)
        }
    }
}

function Mt(e) {
    let t, i, a, o, r, s;
    return {
        c() {
            t = f("li"), i = f("a"), a = f("ion-icon"), s = x(), Lt(a, "name", o = e[2].icon), n(i, "href", r = e[2].value), n(i, "class", "social-link"), n(i, "target", "_blank"), n(t, "class", "social-item")
        }
        , m(l, p) {
            j(l, t, p), c(t, i), c(i, a), c(t, s)
        }
        , p: S
        , d(l) {
            l && _(t)
        }
    }
}

function ce(e) {
    let t, i, a, o, r, s, l, p, d = P.name + ""
        , u, m, b, g, h, L, $, A, N, C, M, v, z, w, O, E, U, Z = nt.profile
        , T = [];
    for (let k = 0; k < Z.length; k += 1) T[k] = St(zt(e, Z, k));
    let V = nt.social
        , I = [];
    for (let k = 0; k < V.length; k += 1) I[k] = Mt($t(e, V, k));
    return {
        c() {
            t = f("aside"), i = f("div"), a = f("figure"), o = f("img"), s = x(), l = f("div"), p = f("h1"), u = H(d), m = x(), b = f("p"), b.textContent = `${P.role
                                                                                                                                    }`, g = x(), h = f("button"), h.innerHTML = `<span>Show Contacts</span><ion-icon name="chevron-down"></ion-icon>`, L = x(), $ = f("div"), A = f("div"), N = x(), C = f("ul");
            for (let k = 0; k < T.length; k += 1) T[k].c();
            M = x(), v = f("div"), z = x(), w = f("ul");
            for (let k = 0; k < I.length; k += 1) I[k].c();
            mt(o.src, r = "/images/AR.jpeg") || n(o, "src", r), n(o, "alt", P.name), n(o, "width", "80"), n(a, "class", "avatar-box"), n(p, "class", "name"), n(p, "title", P.name), n(b, "class", "title"), n(l, "class", "info-content"), n(h, "class", "info_more-btn"), n(h, "data-sidebar-btn", ""), n(i, "class", "sidebar-info"), n(A, "class", "separator"), n(C, "class", "contacts-list"), n(v, "class", "separator"), n(w, "class", "social-list"), n($, "class", "sidebar-info_more"), n(t, "class", O = "sidebar " + e[0]), n(t, "data-sidebar", "")
        }
        , m(k, W) {
            j(k, t, W), c(t, i), c(i, a), c(a, o), c(i, s), c(i, l), c(l, p), c(p, u), c(l, m), c(l, b), c(i, g), c(i, h), c(t, L), c(t, $), c($, A), c($, N), c($, C);
            for (let y = 0; y < T.length; y += 1) T[y].m(C, null);
            c($, M), c($, v), c($, z), c($, w);
            for (let y = 0; y < I.length; y += 1) I[y].m(w, null);
            E || (U = G(h, "click", e[1]), E = !0)
        }
        , p(k, [W]) {
            if (W & 0) {
                Z = nt.profile;
                let y;
                for (y = 0; y < Z.length; y += 1) {
                    const Q = zt(k, Z, y);
                    T[y] ? T[y].p(Q, W) : (T[y] = St(Q), T[y].c(), T[y].m(C, null))
                }
                for (; y < T.length; y += 1) T[y].d(1);
                T.length = Z.length
            }
            if (W & 0) {
                V = nt.social;
                let y;
                for (y = 0; y < V.length; y += 1) {
                    const Q = $t(k, V, y);
                    I[y] ? I[y].p(Q, W) : (I[y] = Mt(Q), I[y].c(), I[y].m(w, null))
                }
                for (; y < I.length; y += 1) I[y].d(1);
                I.length = V.length
            }
            W & 1 && O !== (O = "sidebar " + k[0]) && n(t, "class", O)
        }
        , i: S
        , o: S
        , d(k) {
            k && _(t), it(T, k), it(I, k), E = !1, U()
        }
    }
}

function pe(e, t, i) {
    let a = "deactive";
    return [a, () => {
        a == "active" ? i(0, a = "") : i(0, a = "active")
    }]
}
class de extends R {
    constructor(t) {
        super(), J(this, t, pe, ce, K, {})
    }
}

function fe(e) {
    let t, i, a, o, r, s, l, p, d, u, m, b, g, h, L, $, A, N, C, M, v, z;
    return i = new de({}), r = new ae({}), p = new Gt({}), b = new se({}), $ = new ne({}), M = new Tt({}), {
        c() {
            t = f("main"), D(i.$$.fragment), a = x(), o = f("div"), D(r.$$.fragment), s = x(), l = f("article"), D(p.$$.fragment), u = x(), m = f("article"), D(b.$$.fragment), h = x(), L = f("article"), D($.$$.fragment), N = x(), C = f("article"), D(M.$$.fragment), n(l, "class", d = "about " + e[0].about), n(l, "data-page", "about"), n(m, "class", g = "resume " + e[0].resume), n(m, "data-page", "resume"), n(L, "class", A = "portfolio " + e[0].portfolio), n(L, "data-page", "portfolio"), n(C, "class", v = "contact " + e[0].contact), n(C, "data-page", "contact"), n(o, "class", "main-content")
        }
        , m(w, O) {
            j(w, t, O), X(i, t, null), c(t, a), c(t, o), X(r, o, null), c(o, s), c(o, l), X(p, l, null), c(o, u), c(o, m), X(b, m, null), c(o, h), c(o, L), X($, L, null), c(o, N), c(o, C), X(M, C, null), z = !0
        }
        , p(w, [O]) {
            (!z || O & 1 && d !== (d = "about " + w[0].about)) && n(l, "class", d), (!z || O & 1 && g !== (g = "resume " + w[0].resume)) && n(m, "class", g), (!z || O & 1 && A !== (A = "portfolio " + w[0].portfolio)) && n(L, "class", A), (!z || O & 1 && v !== (v = "contact " + w[0].contact)) && n(C, "class", v)
        }
        , i(w) {
            z || (F(i.$$.fragment, w), F(r.$$.fragment, w), F(p.$$.fragment, w), F(b.$$.fragment, w), F($.$$.fragment, w), F(M.$$.fragment, w), z = !0)
        }
        , o(w) {
            B(i.$$.fragment, w), B(r.$$.fragment, w), B(p.$$.fragment, w), B(b.$$.fragment, w), B($.$$.fragment, w), B(M.$$.fragment, w), z = !1
        }
        , d(w) {
            w && _(t), q(i), q(r), q(p), q(b), q($), q(M)
        }
    }
}

function me(e, t, i) {
    let a;
    return Ft(e, Et, o => i(0, a = o)), [a]
}
class ge extends R {
    constructor(t) {
        super(), J(this, t, me, fe, K, {})
    }
}
new ge({
    target: document.getElementById("app")
});
