import React from "react";
import { ArrowLeftRight, Building2 } from "lucide-react";
import Card from "../../components/Card";

const Preference = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-cyan-500 uppercase text-sm font-semibold tracking-widest">
            Why Us
          </p>

          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            Why they prefer Finpay
          </h2>

        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">


          {/* Card 1 */}
          <Card className="bg-[#F8FBFD]">

            <h1 className="text-6xl font-bold text-cyan-500">
              3k+
            </h1>

            <p className="text-2xl mt-8 font-medium text-slate-800">
              Businesses already running
              <br />
              on Finpay
            </p>

          </Card>



          {/* Card 2 */}
          <Card className="bg-[#F8FBFD]">

            <h3 className="text-3xl font-semibold text-slate-900">
              Instant Withdraw your funds
              <br />
              at any time
            </h3>


            <div className="flex justify-center items-center gap-8 mt-12">

              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center">
                <ArrowLeftRight
                  className="text-white"
                  size={28}
                />
              </div>


              <span className="text-3xl text-gray-300">
                ⟷
              </span>


              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center">
                <Building2
                  className="text-white"
                  size={28}
                />
              </div>

            </div>


          </Card>



          {/* Card 3 */}
          <Card className="bg-[#F8FBFD]">

            <h3 className="text-3xl font-semibold text-slate-900">
              No asset volatility
            </h3>


            <div className="text-gray-500 mt-5 leading-8">
              <p>
                Generate returns on your
              </p>

              <p>
                cash reserves without making
              </p>

              <p>
                any investments.
              </p>
            </div>


          </Card>




          {/* Card 4 */}
          <Card className="bg-[#F8FBFD]">

            <p className="text-gray-500">
              Summary
            </p>


            <h2 className="text-4xl font-bold mt-2">
              $1,876,580
            </h2>


            <div className="mt-8 h-52 bg-white rounded-xl border p-5">

              <svg
                className="w-full h-full"
                viewBox="0 0 400 180"
              >

                <path
                  d="M10 150 C60 120 90 110 120 100 S190 70 240 60 S310 40 390 20"
                  fill="none"
                  stroke="#2CA8B5"
                  strokeWidth="4"
                />

              </svg>

            </div>


          </Card>


        </div>

      </div>
    </section>
  );
};

export default Preference;