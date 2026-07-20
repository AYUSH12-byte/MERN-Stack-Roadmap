import React from "react";
import { ArrowUpRight } from "lucide-react";
import Card from "../../components/Card";

const Mission = () => {

  return (

    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6 lg:px-8">


        {/* Heading */}

        <div className="text-center">

          <p className="uppercase text-cyan-500 text-sm font-semibold tracking-widest">
            Our Mission
          </p>


          <h2 className="text-5xl font-bold text-slate-900 mt-3">
            We've helped
            <br />
            innovative companies
          </h2>


          <p className="text-gray-500 mt-6 leading-8">
            Hundreds of all sizes and across all industries
            <br />
            have made big improvements with us.
          </p>


        </div>



        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-10 text-center mt-20">


          <div>

            <h3 className="text-5xl font-bold">
              24%
            </h3>

            <p className="text-gray-500 mt-4">
              Revenue business
            </p>

          </div>



          <div>

            <h3 className="text-5xl font-bold">
              180K
            </h3>

            <p className="text-gray-500 mt-4">
              In annual revenue
            </p>

          </div>



          <div>

            <h3 className="text-5xl font-bold">
              10+
            </h3>

            <p className="text-gray-500 mt-4">
              Months of runway
            </p>

          </div>


        </div>




        {/* Plans */}

        <p className="text-center uppercase tracking-widest text-sm font-semibold mt-20">
          Choose Plan
        </p>



        <div className="grid md:grid-cols-2 gap-6 mt-8">


          {/* Plus */}

          <Card className="bg-[#EEF5F7] h-72 flex flex-col justify-between">

            <h2 className="text-5xl font-bold">
              Plus
            </h2>


            <div className="flex justify-between items-center">

              <p className="text-3xl">
                £2.99/month
              </p>


              <ArrowUpRight size={30}/>

            </div>


          </Card>




          {/* Premium */}

          <Card className="bg-gradient-to-br from-cyan-500 to-cyan-700 h-72 flex flex-col justify-between">


            <h2 className="text-5xl font-bold text-white">
              Premium
            </h2>


            <div className="flex justify-between items-center">

              <p className="text-3xl text-white">
                £6.99/month
              </p>


              <ArrowUpRight
                size={30}
                className="text-white"
              />

            </div>


          </Card>


        </div>


      </div>

    </section>

  );
};


export default Mission;