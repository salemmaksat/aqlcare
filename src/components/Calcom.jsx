const Calcom = () => {
    return (
      <section id="calcom" className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-black mb-2">
              Limited Beta Only 🔒
            </h1>
            <p className="text-lg text-gray-600">
              Book a demo to see if our product is a good match for you.
            </p>
          </div>
          <div className="w-full">
            <iframe 
              src="https://cal.com/aqlcare-demo" 
              style={{ border: 0 }} 
              width="100%" 
              height="800" 
              frameBorder="0"
              title="Schedule a Demo"
            ></iframe>
          </div>
        </div>
      </section>
    );
  };
  
  export default Calcom;
  