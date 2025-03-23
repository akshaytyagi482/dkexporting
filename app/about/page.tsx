import React from 'react'

const page = () => {
  return (
    <section className="our-team bg-gray-100 py-16 px-8">
    <h2 className="text-center mt-10 text-4xl font-bold text-green-700 mb-12">Meet Our Team</h2>
    
    <div className="flex flex-wrap justify-center gap-8">
        <div className="team-member flex flex-col items-center bg-white shadow-lg p-6 rounded-lg mb-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <img src="Raj.png" alt="Raj Ranawat" className="w-40 h-40 rounded-full object-cover border-4 border-green-500" />
            <div className="text-center mt-4">
                <h3 className="text-2xl font-semibold text-green-700">Raj Ranawat</h3>
                <p className="text-gray-500 font-medium">CEO</p>
                <p className="mt-2 text-gray-700">Raj Ranawat leads D. K. Exporting with a practical approach and a focus on steady growth. With his noteworthy experience, Raj plays an important role in navigating the company through changing market dynamics. His leadership style is grounded in clear communication and building lasting relationships with clients and partners.</p>
            </div>
        </div>
        
        <div className="team-member flex flex-col items-center bg-white shadow-lg p-6 rounded-lg mb-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <img src="Adyant.png" alt="Adyant Prakash" className="w-40 h-40 rounded-full object-cover border-4 border-green-500" />
            <div className="text-center mt-4">
                <h3 className="text-2xl font-semibold text-green-700">Adyant Prakash</h3>
                <p className="text-gray-500 font-medium">Business Strategist</p>
                <p className="mt-2 text-gray-700">Adyant Prakash brings a sharp, analytical perspective to D.K. Exporting, focusing on developing and executing strategies that drive sustainable growth. With a deep understanding of market trends and global trade dynamics, Adyant plays a key role in identifying new opportunities and refining the company’s approach to business.</p>
            </div>
        </div>
        
        <div className="team-member flex flex-col items-center bg-white shadow-lg p-6 rounded-lg mb-8 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <img src="Amritansh.png" alt="Amritanshu Monarch" className="w-40 h-40 rounded-full object-cover border-4 border-green-500" />
            <div className="text-center mt-4">
                <h3 className="text-2xl font-semibold text-green-700">Amritanshu Monarch</h3>
                <p className="text-gray-500 font-medium">Product Manager</p>
                <p className="mt-2 text-gray-700">Amritanshu Monarch plays a crucial role at D. K. Exporting, driving the development and enhancement of our product range. With a strong focus on customer needs and market trends, they ensure that our products not only meet but exceed expectations.</p>
            </div>
        </div>
    </div>
    
    <h2 className="text-center text-4xl font-bold text-green-700 mt-16">Our Story</h2>
    <p className="text-center text-gray-700 mt-4 px-4 md:px-16 lg:px-32">At D. K. Exporting, we believe that true wellness begins with nature. Born out of a passion to bring the purest, most nutritious foods to the world, we are an Indian exporter specializing in organic food products that embrace both tradition and innovation.</p>
    <p className="text-center text-gray-700 mt-4 px-4 md:px-16 lg:px-32">Our journey started with a simple yet powerful mission: to connect people with the goodness of nature through food that’s not only healthy but also sustainably sourced. With the rise of industrial farming and synthetic chemicals, we felt it was essential to offer an alternative that respects the land and its natural rhythms. Our answer? Organic farming practices that honor the earth and provide nourishment in its most authentic form.</p>
    <p className="text-center text-gray-700 mt-4 px-4 md:px-16 lg:px-32">We take pride in cultivating a diverse range of organic products that reflect India’s rich agricultural heritage. From the ancient goodness of millets and ragi to the vibrant energy of moringa and turmeric, we bring to you foods that are packed with nutrients, antioxidants, and flavors that are as wholesome as they are delicious. Our exotic offerings, like the refreshing dragon fruit, add a global touch to our organic range, ensuring that your diet is as exciting as it is nutritious.</p>
    <p className="text-center text-gray-700 mt-4 px-4 md:px-16 lg:px-32">For us, it’s not just about exporting food; it’s about exporting a way of life—a commitment to sustainability, health, and the well-being of our planet and its people. Our farmers are the backbone of our story. They follow time-honored practices that have been passed down through generations, and we are proud to support them with fair wages and long-term partnerships that allow them to thrive.</p>
    <p className="text-center text-gray-700 mt-4 px-4 md:px-16 lg:px-32">As a company, we are more than just a bridge between India and the world; we are a part of a larger movement towards conscious eating. Every product we offer is a step towards a healthier, more sustainable future. We carefully select, process, and package each product with the utmost care, ensuring that it reaches you in its purest form.</p>
    <p className="text-center text-gray-700 mt-4 px-4 md:px-16 lg:px-32">Our promise to you is simple: the highest-quality organic foods that nourish both body and soul. With every bite, you’re not just experiencing the rich taste of nature; you’re contributing to a healthier planet.</p>
    <p className="text-center text-gray-700 mt-4 px-4 md:px-16 lg:px-32">Join us in this journey, as we continue to nurture nature, nourish lives, and build a brighter, more sustainable tomorrow.</p>
</section>
  )
}

export default page