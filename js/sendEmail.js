
function sendEmail() {
    Email.send({
        secureToken: "776f9266-4250-48a9-8476-1915e45f4eaa",

        To: 'praveen.mindnerves@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form",
        Body: "Name:" + document.getElementById("name").value
            + "<br> Email:" + document.getElementById("email").value
            + "<br> Phone Number:" + document.getElementById("contact").value
            + "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully But Please Feel Free to call or Whatsapp @ +91 8660435935")
    );
}