import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
// import emailjs from 'emailjs-com';
import logo from './assets/Romel-logo-reverse.svg';
import Profile from './assets/Romel-Profile.pdf';
import './App.module.css';

const App: Component = () => {
  const [email, setEmail] = createSignal({});

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const name: string = e.target.name;
    const value: string = e.target.value;
    setEmail((values) => ({ ...values, [name]: value }));
  };
  const handleForm = () => {
    console.log(email());
  };

  return (
    <div class='bg-image min-vh-100 py-5'>
      <header class='container-fluid py-5 my-5'>
        <div class='text-center text-white py-5 mt-5'>
          <div class='row align-items-center justify-content-center'>
            <p class=' h1 display-4 display-xxl-3 fw-bold pt-5 pb-3'>
              Our Website is Under Maintenance
            </p>
            <p class='pb-3 h1-xxl h3'>Get notified when we launch</p>
            <form onSubmit={(e) => handleSubmit(e)} method='post' class='col-8'>
              <div class='input-group justify-content-center'>
                <input
                  class='col-xl-4 ps-3 text-grey border-0 rounded-start'
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  id='email'
                  onChange={(e) => handleChange(e)}
                  required
                />
                <button
                  class='bg-color btn px-5 border-0 text-white rounded-end'
                  onClick={handleForm}
                >
                  Notify Me!
                </button>
              </div>
            </form>
          </div>
          <div class='py-5'>
            <a
              href='https://drive.google.com/file/d/13ROIcwvOCLtH0tka8nAVY_jcOx9yutHS/view?usp=sharing'
              class='btn border border-white px-3 rounded-3 text-reset text-decoration-none h1 fw-bold'
              target='_blank'
              download
            >
              <i class='bi bi-download me-2'></i>
              {/* <i class="bi bi-cloud-download"></i> */}
              Download Our Profile
            </a>
          </div>
          <div class='col-3 mx-auto pb-5'>
            <img src={logo} class='img-fluid' alt='logo' />
          </div>
          <div>
            <a
              href='https://goo.gl/maps/GBHsqPu4AxLUTehMA'
              target='_blank'
              class='text-decoration-none text-reset'
            >
              Le'mac Towers, 4th floor, church Rd, Westlands
            </a>
          </div>
          <div>
            <a class='text-decoration-none text-reset' href='tel:+254112715885'>
              0112715885
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
