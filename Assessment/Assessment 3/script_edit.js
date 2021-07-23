function check() {
    var name1 = document.getElementById("name").value;
    var email1 = document.getElementById("email").value;
    var title1 = document.getElementById("title").value;
    var message1 = document.getElementById("message").value;
    submitOK = "true";

    if (name1.length == 0) {
        alert("Please fill out your name");
        submitOK = "false";
    }

    if (name1.length > 100) {
        alert("Your name should not exceed 100 characters.");
        submitOK = "false";
    }

    if (email1.length == 0) {
        alert("Please fill out your email");
        submitOK = "false";
    }

    if (email1.length > 100) {
        alert("Your email should not exceed 100 characters.");
        submitOK = "false";
    }

    if (title1.length == 0) {
        alert("Please fill out the subject.");
        submitOK = "false";
    }

    if (title1.length > 0 && title1.length < 50) {
        alert("Subject should not be shorter than 50 characters.");
        submitOK = "false";
    }

    if (title.length > 250) {
        alert("Subject should not exceed 250 characters.");
        submitOK = "false";
    }

    if (message1.length == 0) {
        alert("Please fill out the message.");
        submitOK = "false";
    }

    if (title.length > 250) {
        alert("Message should not exceed 500 characters.");
        submitOK = "false";
    }

    if (submitOK == "false") {
        return false;
    }
}

function checkOrder() {
    var name2 = document.getElementById("order_name").value;
    var additions1 = document.getElementById("additions").value;
    var date1 = document.getElementById("date").value;
    var address = document.getElementById("place").value;

    if (name2.length == 0) {
        alert("Please fill out your name.");
        submitOK = "false";
        return;
    }

    if (name2.length > 100) {
        alert("Your name should not exceed 100 characters.");
        submitOK = "false";
        return;
    }

    if (additions1.length > 30) {
        alert("Message should not exceed 30 characters.");
        submitOK = "false";
        return;
    }

    if (date1.length == 0) {
        alert("Please fill out the deliver date.");
        submitOK = "false";
        return;
    }

    if (address.length == 0) {
        alert("Please fill out the address.");
        submitOK = "false";
        return;
    }

    if (address.length > 500) {
        alert("Address should not exceed 500 characters.");
        submitOK = "false";
        return;
    }

    var today = new Date();
    var date = new Date(date1);
    if (today > date) {
        alert("Please select Deliver date from today");
        submitOK = "false";
        return;
    }
}