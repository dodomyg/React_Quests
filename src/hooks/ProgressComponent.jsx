import { useState } from "react";

const ProgressComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    {
      name: "Customer-Info",
      Component: () => <div>Customer-Info</div>,
    },
    {
      name: "Order-Info",
      Component: () => <div>Order-Info</div>,
    },
    {
      name: "Payment-Info",
      Component: () => <div>Payment-Info</div>,
    },
    {
      name: "Delivery-Complete",
      Component: () => <div>Delivery-Complete</div>,
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl text-center my-4">Progress Component</h1>
      <div className="my-10 flex items-center justify-evenly">
        {steps.map((step, i) => (
          <div className="flex items-center" key={i}>
            <div className="text-center">
              <h1
                className={`border rounded-full w-10 h-10 flex items-center justify-center mb-1 ${
                  currentStep === i + 1 && "bg-blue-400 text-white"
                } ${currentStep > i + 1 && "bg-green-400 text-white"}`}
              >
                {currentStep > i + 1 ? "✔" : i + 1}
              </h1>
              <h1 className="text-sm">{step.name}</h1>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-1 bg-gray-300 mx-2"></div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center">{steps[currentStep - 1].Component()}</div>
      <div className="text-center mt-4">
        <button
          className="px-4 py-2 mr-2 bg-gray-200 border rounded"
          disabled={currentStep === 1}
          onClick={() => setCurrentStep(currentStep - 1)}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white border rounded"
          
          onClick={() => {
            if (currentStep < steps.length) {
              setCurrentStep(currentStep + 1);
            }
          }}
          disabled={currentStep === steps.length}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default ProgressComponent;
