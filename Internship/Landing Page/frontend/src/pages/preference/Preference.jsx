import { ArrowLeftRight, Building2 } from "lucide-react";
import PreferenceCard from "./PreferenceCard";

const Preference = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-500 uppercase text-sm font-semibold tracking-widest">
            Why Us
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Why they prefer Finpay
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Card 1 */}
          <PreferenceCard>
            <h1 className="text-6xl font-bold text-cyan-500">3k+</h1>

            <p className="text-2xl mt-8 font-medium text-slate-800">
              Businesses already running
              <br />
              on Finpay
            </p>
          </PreferenceCard>

          {/* Card 2 */}
          <PreferenceCard>
            <h3 className="text-2xl font-semibold leading-snug">
              Instant Withdraw your funds
              <br />
              at any time
            </h3>

            <div className="flex justify-center items-center gap-8 mt-12">
              <div className="bg-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                <ArrowLeftRight className="text-white" />
              </div>

              <span className="text-3xl text-gray-300">⟷</span>

              <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center">
                <Building2 className="text-white" />
              </div>
            </div>
          </PreferenceCard>

          {/* Card 3 */}
          <PreferenceCard>
            <h3 className="text-3xl font-semibold">
              No asset volatility
            </h3>

            <p className="text-gray-500 mt-5 leading-8">
              <p>Generate returns on your </p>
              <p>cash reserves without making</p>
              <p> any investments.</p>
            </p>

          </PreferenceCard>

          {/* Card 4 */}
          <PreferenceCard>
            <p className="text-gray-500 text-sm">Summary</p>

            <h2 className="text-4xl font-bold mt-2">
              $1,876,580
            </h2>

            <div className="mt-8 h-52 bg-white rounded-xl border flex items-end p-5">
              <svg className="w-full h-full" viewBox="0 0 400 180">
                <path
                  d="M10 150 C60 120 90 110 120 100 S190 70 240 60 S310 40 390 20"
                  fill="none"
                  stroke="#2CA8B5"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </PreferenceCard>

        </div>
      </div>
    </section>
  );
};

export default Preference;