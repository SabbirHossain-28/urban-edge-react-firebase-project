import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>UrbanEdge | Contact-Us</title>
      </Helmet>
      <h2 data-aos="zoom-in-down" data-aos-duration="500" className="text-4xl text-center mt-12 font-semibold">
        Contact With Us
      </h2>
      <div data-aos="zoom-out-down" data-aos-delay="500" data-duration="1000" className="bg-slate-200 flex flex-col md:flex-row lg:flex-row gap-4 p-8 mt-8 mb-12 rounded-lg">
        <div data-aos="zoom-out-right" data-aos-delay="1000" data-aos-duration="500" className="md:w-1/2 lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Send Message</h2>
          <form className="mb-4">
            <div className="flex flex-col md:flex-row lg:flex-row gap-2 mb-3">
              <div className="md:w-1/2 lg:w-1/2">
                <label
                  className="block text-[#131313] text-lg font-medium mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input className="w-full" type="text" id="name" />
              </div>
              <div className="md:w-1/2 lg:w-1/2">
                <label
                  className="block text-[#131313] text-lg font-medium mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input className="w-full" type="email" id="email" />
              </div>
            </div>
            <label
              className="block text-[#131313] text-lg font-medium mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input className="w-full mb-3" type="text" id="subject" />
            <label
              className="block text-[#131313] text-lg font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              className="w-full"
            ></textarea>
          </form>

          <button data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-delay="2000"
            className="border px-10 py-2 text-lg text-white font-semibold bg-[#9e7d54]"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Send
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Thank you Sir!!!</h3>
              <p className="py-4">Your message is successfully sended</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        <div data-aos="zoom-out-left" data-aos-delay="1500" data-aos-duration="500" className="md:w-1/2 lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <div className="mb-4">
            <p className="text-[#131313] text-lg font-medium mb-1">
              Office Address:
            </p>
            <span>
              <address>
                Bashundhora Abashik, I-Block, Road:12, Commercial Tower
              </address>
            </span>
          </div>
          <div className="mb-4">
            <p className="text-[#131313] text-lg font-medium mb-1">
              Contact Number:
            </p>{" "}
            <span>+88012345678, +880987654321</span>
          </div>
          <div className="mb-4">
            <p className="text-[#131313] text-lg font-medium mb-1">
              Email Address:
            </p>{" "}
            <span>urban-info@office-profile.com</span>
          </div>
          <div>
            <p className="text-[#131313] text-lg font-medium mb-1">
              Career Info:
            </p>{" "}
            <span>
              If you are interested in employment opportunities at Urban Edge
              and raise up your amazing career path with us, please email
              us:apply@urbanedge.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
