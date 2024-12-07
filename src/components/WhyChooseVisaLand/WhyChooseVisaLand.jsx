const WhyChooseVisaLand = () => {
  return (
    <div className="py-10 px-6 bg-blue-50">
      <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Why Choose Visa Land?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-4">
          <img
            src="/images/fast-processing.svg"
            alt="Fast Processing"
            className="w-16 h-16"
          />
          <p className="text-gray-700">
            <strong>Fast Processing:</strong> Get your visa application
            processed quickly and efficiently.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="/images/secure-payment.svg"
            alt="Secure Payment"
            className="w-16 h-16"
          />
          <p className="text-gray-700">
            <strong>Secure Payment:</strong> Make payments with confidence
            through secure channels.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="/images/expert-support.svg"
            alt="Expert Support"
            className="w-16 h-16"
          />
          <p className="text-gray-700">
            <strong>Expert Support:</strong> Our team of experts is here to
            guide you through the process.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhyChooseVisaLand;