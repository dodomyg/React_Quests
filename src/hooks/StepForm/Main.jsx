import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaInfo } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";
const Main = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentData, setCurrentData] = useState({});
  const headers = [
    { icon: <CiUser />, title: "Start" },
    { icon: <FaInfo />, title: "Info" },
    { icon: <FaFlagCheckered />, title: "Final" },
  ];
  return (
    <div className="px-10 my-10">
      <div className="flex items-center justify-evenly">
        {headers?.map((h, i) => (
          <div
            className={`text-center border-black border-2 p-2 rounded-full ${
              currentStep > i && "bg-green-300"
            }`}
            key={i}
          >
            <div className="flex items-center justify-center">{h?.icon}</div>
            <div>{h?.title}</div>
          </div>
        ))}
      </div>

      {currentStep === 0 && (
        <>
          <div>Name</div>
          <div>
            <input
              type="text"
              value={currentData?.name ?? ""}
              onChange={(e) =>
                setCurrentData((p) => ({ ...p, name: e.target.value }))
              }
            />
          </div>
          <div>Age</div>
          <div>
            <input
              type="number"
              value={currentData?.age ?? ""}
              onChange={(e) =>
                setCurrentData((p) => ({ ...p, age: e.target.value }))
              }
            />
          </div>
          <div>City</div>
          <div>
            <input
              type="text"
              value={currentData?.city ?? ""}
              onChange={(e) =>
                setCurrentData((p) => ({ ...p, city: e.target.value }))
              }
            />
          </div>
        </>
      )}
      {currentStep === 1 && (
        <>
          <div>Company</div>
          <div>
            <input
              type="text"
              value={currentData?.company ?? ""}
              onChange={(e) =>
                setCurrentData((p) => ({ ...p, company: e.target.value }))
              }
            />
          </div>
          <div>CTC</div>
          <div>
            <input
              type="number"
              value={currentData?.ctc ?? ""}
              onChange={(e) =>
                setCurrentData((p) => ({ ...p, ctc: e.target.value }))
              }
            />
          </div>
          <div>Title</div>
          <div>
            <input
              type="text"
              value={currentData?.title ?? ""}
              onChange={(e) =>
                setCurrentData((p) => ({ ...p, title: e.target.value }))
              }
            />
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div>Sports</div>
          <div>
            <input
              type="text"
              value={currentData?.sports ?? ""}
              onChange={(e) =>
                setCurrentData((p) => ({ ...p, sports: e.target.value }))
              }
            />
          </div>
          <div>Contact</div>
          <div>
            <input
              type="number"
              value={currentData ? currentData?.contact : ""}
              onChange={(e) =>
                setCurrentData((p) => ({ ...p, contact: e.target.value }))
              }
            />
          </div>
          <div>email</div>
          <div>
            <input
              type="text"
              value={currentData ? currentData?.email : ""}
              onChange={(e) =>
                setCurrentData((p) => ({ ...p, email: e.target.value }))
              }
            />
          </div>
        </>
      )}

      <div className="flex items-center justify-center gap-10">
        <button
          disabled={currentStep === 0}
          onClick={() => setCurrentStep((p) => p - 1)}
        >
          Previous
        </button>
        {currentStep < 2 && (
          <button onClick={() => setCurrentStep((p) => p + 1)}>Next</button>
        )}
        {currentStep === 2 && (
          <button onClick={() => {
            setCurrentStep(2)
          console.log(currentData, "DATA")
          }}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
