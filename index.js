function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_0lwppn4";
  const templateID = "template_ji6pfoj";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    document.getElementById("name").value.trim() !== "" &&
    document.getElementById("email").value.trim() !== "" && emailRegex.test(document.getElementById("email").value) &&
    document.getElementById("message").value.trim() !== ""
  ) {
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!");
      })
      .catch((err) => console.log(err));
  }
}
