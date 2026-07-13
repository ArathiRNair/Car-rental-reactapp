import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold leading-tight">
              Find Your Perfect Ride
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Rent premium cars at affordable prices. Whether it's for business,
              travel, or adventure, we've got the perfect vehicle for you.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
                Book Now
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900"
              alt="Luxury Car"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Search Box */}
      <section className="-mt-10">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Pickup Location"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="date"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="date"
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-700 text-white rounded-lg hover:bg-blue-800">
              Search Cars
            </button>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Cars
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "BMW X5",
              price: "$80/day",
              image:
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600",
            },
            {
              name: "Mercedes C-Class",
              price: "$75/day",
              image:
                "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600",
            },
            {
              name: "Audi A6",
              price: "$85/day",
              image:
                "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600",
            },
          ].map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{car.name}</h3>

                <p className="text-blue-700 font-bold mt-2">{car.price}</p>

                <button className="mt-5 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center shadow-md rounded-xl p-8">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2">
                Premium Vehicles
              </h3>
              <p className="text-gray-600">
                Choose from luxury, SUV, sedan, and economy cars.
              </p>
            </div>

            <div className="text-center shadow-md rounded-xl p-8">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">
                Affordable Pricing
              </h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden charges.
              </p>
            </div>

            <div className="text-center shadow-md rounded-xl p-8">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600">
                We're always here to help whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready for Your Next Journey?
          </h2>

          <p className="mt-4 text-lg text-gray-300">
            Book your dream car today and enjoy a comfortable ride.
          </p>

          <button className="mt-8 bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;