import emailjs from 'emailjs-com';

function sendEmail() {
  const templateParams = {
    name: 'John Doe',
    message: 'Hello from EmailJS!'
  };

  emailjs.send('service_2cv872o', 'template_o6730fp', templateParams, 'deleon.jessica060@gmail.com')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      console.log('FAILED...', error);
    });
}
