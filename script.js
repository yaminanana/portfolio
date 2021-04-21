window.onscroll = function (){
    if(document.documentElement.scrollTop > 300){
        document.getElementById("navbar").style.backgroundColor = "#737599";
       // document.querySelector("li a ").style.color = "white";
        document.getElementById("navbar").style.padding = "30px 10px";

    }else{
        document.getElementById("navbar").style.backgroundColor = "#a9abbc";
        document.querySelector("a").style.color = "black";
        document.getElementById("navbar").style.padding = "15px 10px";
    };


};

function sendMail(params){
let tempParams = {
    from_name:document.getElementById('mail').Value,
    to_name:document.getElementById('name').Value,
    message:document.getElementById('msg').Value,
};
emailjs.send('service_4qcxtws','template_yq3jb9r',tempParams )
.then(function(res){
    console.log("success",res.status);
})
}




     