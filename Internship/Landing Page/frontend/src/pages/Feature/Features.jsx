import { ArrowRightLeft, Building2, Shield } from "lucide-react";
import Card from "../../components/Card";

const Features = () => {

  const data = [
    {
      icon: <ArrowRightLeft size={40} className="text-slate-700" />,
      title: "Free transfers",
      desc: "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
    },
    {
      icon: <Building2 size={40} className="text-slate-700" />,
      title: "Multiple account",
      desc: "Run your operations with cash from your account and generate yield on funds stored in your account.",
    },
    {
      icon: <Shield size={40} className="text-slate-700" />,
      title: "Unmatched security",
      desc: "Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.",
    },
  ];


  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-6xl mx-auto px-6 lg:px-8">


        {/* Heading */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>

            <p className="uppercase tracking-widest text-cyan-600 text-sm font-semibold">
              Future Payment
            </p>


            <h1 className="text-5xl font-bold text-slate-900 mt-3 leading-tight">
              Experience that grows
              <br />
              with your scale.
            </h1>

          </div>



          <div className="md:flex md:justify-end">

            <p className="text-gray-500 text-lg leading-8 max-w-md">
              Design a financial operating system that works for your
              business and streamlined cash flow management.
            </p>

          </div>


        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">


          {data.map((item,index)=>(
            
            <Card 
              key={index}
              className="bg-white"
            >

              <div className="mb-6">
                {item.icon}
              </div>


              <h2 className="text-3xl font-semibold text-slate-900 mb-4">
                {item.title}
              </h2>


              <p className="text-gray-500 leading-8">
                {item.desc}
              </p>


            </Card>

          ))}


        </div>


      </div>

    </section>
  );
};


export default Features;