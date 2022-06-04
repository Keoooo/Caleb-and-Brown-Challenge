import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({ toggle, tabState }) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex space-x-4  text-companySecondary tracking-widest text-l mb-5 ">
        <button
          onClick={() => toggle(false)}
          className={classNames(
            !tabState
              ? "hover:border-companySecondary font-bold p-3 rounded-full  border border-transparent "
              : "hover:border-companySecondary font-bold shadow-2xl rounded-full text-companyBranding shadow-companySecondary bg-companySecondary  border border-transparent  p-3"
          )}
        >
          All Coins
        </button>
        <button
          onClick={() => toggle(true)}
          className={classNames(
            tabState
              ? "hover:border-companySecondary font-bold border rounded-full border-transparent p-3 "
              : "hover:border-companySecondary font-bold shadow-2xl rounded-full text-companyBranding shadow-companySecondary bg-companySecondary  border border-transparent p-3 "
          )}
        >
          Trending
        </button>
      </div>
    </div>
  );
};

export default Tabs;
