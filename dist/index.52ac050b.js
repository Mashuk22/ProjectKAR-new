"use strict";
function magicMouse(e1) {
    if ((e1 = e1 || {
    }).outerWidth = e1.outerWidth || 30, e1.outerHeight = e1.outerHeight || 30, e1.cursorOuter = e1.cursorOuter || "circle-basic", e1.hoverEffect = e1.hoverEffect || "circle-move", e1.hoverItemMove = e1.hoverItemMove || !1, e1.defaultCursor = e1.defaultCursor || !1, "disable" != e1.cursorOuter) {
        var t = document.createElement("div");
        t.setAttribute("id", "magicMouseCursor"), document.body.appendChild(t);
        var r = document.getElementById("magicMouseCursor");
    }
    if (!e1.defaultCursor) {
        document.body.style.cursor = "none";
        var s = document.createElement("div");
        s.setAttribute("id", "magicPointer"), document.body.appendChild(s);
        var o = document.getElementById("magicPointer");
    }
    if (r) {
        r.style.width = e1.outerWidth + "px", r.style.height = e1.outerHeight + "px";
        var i = e1.outerWidth, a = e1.outerHeight, n = e1.outerWidth, c = e1.outerHeight;
    }
    var u = 0, d = 0, l = 0, m = 0, h = !1;
    document.addEventListener("mousemove", function(e) {
        l = e.clientX, m = e.clientY, setTimeout(()=>{
            h || (u = e.clientX - i / 2, d = e.clientY - a / 2);
        }, 15);
    }), document.querySelectorAll(".magic-hover").forEach((t, r1)=>{
        t.addEventListener("mouseenter", (r)=>{
            switch(e1.hoverEffect){
                case "circle-move":
                    f(t), e1.hoverItemMove && b(r, t);
                    break;
                case "pointer-blur":
                    y(t, "pointer-blur");
                    break;
                case "pointer-overlay":
                    y(t, "pointer-overlay");
            }
        }), t.addEventListener("mouseleave", (r)=>{
            switch(t.style.transform = "translate3d(0,0,0)", e1.hoverEffect){
                case "circle-move":
                    g();
                    break;
                case "pointer-blur":
                    p("pointer-blur");
                    break;
                case "pointer-overlay":
                    p("pointer-overlay");
            }
        });
    });
    var v = ()=>{
        r && (r.style.transform = "matrix(1, 0, 0, 1, " + u + ", " + d + ")", r.style.width = i + "px", r.style.height = a + "px"), o && (o.style.transform = "matrix(1, 0, 0, 1, " + l + ", " + m + ") translate3d(-50%, -50%, 0)"), requestAnimationFrame(v);
    };
    requestAnimationFrame(v);
    const f = (e)=>{
        if (h = !0, r) {
            r.style.transition = "transform 0.2s, width 0.3s, height 0.3s, border-radius 0.2s", r.classList.add("is-hover");
            var t = event.currentTarget.getBoundingClientRect();
            e.classList.contains("magic-hover__square") ? (r.classList.add("cursor-square"), u = t.left, d = t.top, i = t.width, a = t.height) : (u = t.left, d = t.top, i = t.width, a = t.height);
        }
        o && o.classList.add("is-hover");
    }, g = ()=>{
        h = !1, r && (i = n, a = c, r.style.transition = "transform 0.07s, width 0.3s, height 0.3s, border-radius 0.2s", r.classList.remove("cursor-square"), r.classList.remove("is-hover")), o && o.classList.remove("is-hover");
    }, y = (e, t)=>{
        o && o.classList.add(t);
    }, p = (e)=>{
        o && o.classList.remove(e);
    }, b = (e2, t)=>{
        e2.clientX, e2.clientY, t.addEventListener("mousemove", (e)=>{
            t.style.transform = "matrix(1,0,0,1," + (e.offsetX - e.target.offsetWidth / 2) / 2 + ", " + (e.offsetY - e.target.offsetHeight / 2) / 2 + ")";
        });
    };
}

//# sourceMappingURL=index.52ac050b.js.map
