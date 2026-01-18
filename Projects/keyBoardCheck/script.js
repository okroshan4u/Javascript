document.querySelector("body").addEventListener("keydown",(e)=>{
        console.log(e.key);
        // console.log(e.target);
        document.querySelector(".keyresult").innerHTML = e.key
    })