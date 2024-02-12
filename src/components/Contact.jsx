import emailjs from 'emailjs-com';
import Mail from '../assets/Mail';
import Location from '../assets/Location';
import Availability from '../assets/Availability';

function Contact(){
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9od40vo', 'template_j64263s', e.target, 'odkDlMqqIkcJUcN-8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <section id="contact" className='relative w-full flex flex-col items-center h-[100vh] p-10 pd:m-0 md:h-[88vh]'>
            <h1 className='text-4xl font-bold text-white absolute -top-16 md:top-[17%]'>Contact</h1>
            <div className="flex flex-col md:flex-row absolute top-[10%] md:top-[30%] gap-16">
              <div className='flex flex-col justify-start gap-8'>
                <h2 className="text-indigo-300 text-2xl md:text-5xl font-medium">Want to chat?</h2>
                <div className='flex flex-col text-white text-sm md:text-base gap-4'>
                    <p className='flex gap-2 items-center'> <Location /> Location: London, UK (Summer 24)</p>
                    <p className='flex gap-2 items-center'> <Mail /> Email: MohamedSefyani@gmail.com </p>
                    <p className='flex gap-2 items-center'> <Availability /> Availability: Open to offers </p>
                </div>
              </div>
              <div className='flex'>
              <form className='flex flex-col gap-5 justify-center' onSubmit={sendEmail}>
                <input className='rounded-2xl p-3 bg-opacity-10 bg-white text-white outline-none focus:border-transparent' type="text" name="from_name" placeholder="Your Name" required />
                <input className='rounded-2xl p-3 bg-opacity-10 bg-white text-white outline-none focus:border-transparent' type="email" name="email" placeholder="Your Email" required />
                <textarea className='rounded-2xl p-3 bg-opacity-10 bg-white w-[300px] md:w-[400px] h-[200px] text-white outline-none focus:border-transparent' name="message" placeholder="Your Message" required />
                <button className='text-white border border-white text-opacity-70 border-opacity-10 drop-shadow-xl w-max py-3 px-6 rounded-sm' type="submit" value="Send">Send</button>
              </form>
              </div>
            </div>
        </section>
    );
}

export default Contact;