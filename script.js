function page(x){
    if(x == 0){
        document.getElementById('count').style.display='block';
        document.getElementById('h1').style.display='block';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('h3').style.display = 'none';
        document.getElementById('dt').style.display = 'none';
        document.getElementById('t').style.display = 'none';
    }
    else
        document.getElementById('count').style.display = 'none';
    var dest = document.getElementById('dt').value
    var a = new Date(dest).getTime();
    console.log(a)

    var i = setInterval(function(){
    var now = new Date().getTime();
    console.log(now);

    var diff = a - now;
    console.log(diff);

    var s = Math.floor(diff / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10)? "0"+h : h;
    m = (m < 10)? "0"+m : m;
    s = (s < 10)? "0"+s : s;

    document.getElementById("d").textContent = d;
    document.getElementById("hrs").textContent = h;
    document.getElementById("mins").textContent = m;
    document.getElementById("secs").textContent = s;
},1000);
}
