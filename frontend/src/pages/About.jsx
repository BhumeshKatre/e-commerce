import React from 'react';
import Title from '../components/Title';
import NewsLetter from '../components/NewsLetter'
import { assets } from '../assets/frontend_assets/assets';

const About = () => {
  return (
    <section className='py-5 '>
      <Title text1={'ABOUT'} text2={'US'} />

      <div className='p-5 flex gap-4'>
        <div className=''>
          <img
            className=''
            src={assets.about_img}
            alt="" />
        </div>

        <div>
          <p className='mb-2 text-justify '>
            Welcome to our E-commerce platform! We are dedicated to providing you with a seamless online shopping experience, offering a wide range of quality products at competitive prices. Our mission is to ensure customer satisfaction through excellent service, fast delivery, and a user-friendly interface. Thank you for choosing us as your trusted shopping destination.
          </p>
          <p className='mb-2 text-justify '>
            Our team works tirelessly to curate the best products and deals for you. We value your feedback and strive to continuously improve our services. Shop with confidence and enjoy a hassle-free experience every time you visit our site.
          </p>
          <p className='mb-2 text-justify '>
            If you have any questions or need assistance, our support team is always here to help. We look forward to serving you and making your shopping journey enjoyable and rewarding!
          </p>
        </div>
      </div>

      <div>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

        <div className='flex py-5'>
          <div className="flex-1 px-4">
            <h3 className="font-semibold text-lg mb-2">Wide Selection</h3>
            <p className="text-justify text-sm">
              Explore a diverse range of products across multiple categories, carefully curated to meet your needs and preferences.
            </p>
          </div>
          <div className="flex-1 px-4">
            <h3 className="font-semibold text-lg mb-2">Secure Shopping</h3>
            <p className="text-justify text-sm">
              Shop with confidence knowing your personal information and transactions are protected with advanced security measures.
            </p>
          </div>
          <div className="flex-1 px-4">
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-justify text-sm">
              Enjoy quick and reliable delivery services, ensuring your orders reach you promptly and in perfect condition.
            </p>
          </div>
          <div className="flex-1 px-4">
            <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
            <p className="text-justify text-sm">
              Our dedicated support team is always ready to assist you with any queries or concerns, making your experience hassle-free.
            </p>
          </div>
      </div>
      </div>

      <NewsLetter />
    </section>
  );
}

export default About;
