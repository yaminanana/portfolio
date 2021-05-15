window.onscroll = function (){
    if(document.documentElement.scrollTop > 300){
        document.getElementById("navbar").style.backgroundColor = "#ffffff";
       // document.querySelector("li a ").style.color = "white";
        document.getElementById("navbar").style.padding = "30px 10px";

    }else{
        document.getElementById("navbar").style.backgroundColor = "#ffffff";
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


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                alert('Votre Email a bien été envoyé');
            }, function(error) {
                console.log('FAILED...', error);
            });
            document.getElementById("contact-form").reset();
    });
}


const burgerButton = document.getElementsByClassName('burger-button')[0];
const lienmenu = document.getElementsByClassName('lienmenu')[0];


burgerButton.addEventListener('click',() => {
lienmenu.classList.toggle('active')

})   