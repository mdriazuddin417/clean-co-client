import React from "react";
import BucketGirl from "../../assets/images/bucketgirl.png";
const Landing = () => {
  return (
    <div className="relative">
      <div class="hero h-screen lg:h-[60vh] bg-accent mt-16 z-10">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p
              className="text-xl"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Best Quality
            </p>
            <h1
              class="text-5xl font-bold"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
            >
              Professional Cleaning Service
            </h1>
            <p
              class="py-6 max-w-xl"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button
              data-aos-delay="1000"
              data-aos="zoom-in"
              class="btn btn-primary"
            >
              Get Started
            </button>
          </div>
          <div className="h-[60vh] shrink-0 ">
            <img src={BucketGirl} class="h-full" alt="" />
          </div>
        </div>
      </div>
      <div className="shadow-lg p-10 w-5/6 relative  rounded-2xl mx-auto mt-[-50px] bg-base-200 z-50">
        <h2 className="text-2xl mb-5 text-primary">Get Estimate</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full "
          />
        </div>
        <button className="btn btn-primary mt-5">Get a Quote</button>
      </div>
    </div>
  );
};

export default Landing;
