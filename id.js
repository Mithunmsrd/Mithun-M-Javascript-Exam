

function card(){
    let a = document.getElementById("name").value;
    let b = document.getElementById("course").value;
    let c = document.getElementById("stu").value;
    let d = document.getElementById("age").value;
    let e = document.getElementById("blood").value;

    localStorage.setItem("name",a);
    localStorage.setItem("course",b);
    localStorage.setItem("stu",c);
    localStorage.setItem("age",d);
    localStorage.setItem("blood",e);

    let f = localStorage.getItem("name");
    let g = localStorage.getItem("course");
    let h = localStorage.getItem("stu");
    let i = localStorage.getItem("age");
    let j = localStorage.getItem("blood");

    document.getElementById("n").innerHTML=f;
    document.getElementById("c").innerHTML=g;
    document.getElementById("s").innerHTML=h;
    document.getElementById("a").innerHTML=i;
    document.getElementById("b").innerHTML=j;
}