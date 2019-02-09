window.onload=function() {
    var a, b, c,d, aa, bb, z, num, ipt1, ipt2,
        btn1 = document.getElementById("btn1"),
        btn2 = document.getElementById("btn2"),
        rst1 = document.getElementById("rst1"),
        rst2 = document.getElementById("rst2");

    btn1.onclick = function () {
        a = parseFloat(document.getElementById("ipt1").value);
        b = parseFloat(document.getElementById("ipt2").value);
        aa = parseFloat(document.getElementById("ipt1").value);
        bb = parseFloat(document.getElementById("ipt2").value);
        while (a !== b) {
            if (a < b) {
                z = a;
                a = b;
                b = z;
            }
            c = a - b;
            a = b;
            b = c;
        }
        d = aa * bb / a;//d为最小公倍数
        rst1.innerHTML=a;
        rst2.innerHTML=d;
    };

    btn2.onclick=function(){
        rst1.innerHTML="";
        rst2.innerHTML="";
        ipt1=document.getElementById("ipt1");
        ipt2=document.getElementById("ipt2");
        ipt1.value="";
        ipt2.value="";
    }

};