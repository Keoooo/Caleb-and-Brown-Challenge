import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({ toggle, tabState }) => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex space-x-4  text-companyBranding tracking-widest text-l mb-5 ">
        <button
          onClick={() => toggle(false)}
          className={classNames(
            !tabState
              ? "hover:border-companyBranding font-bold p-3   border-b border-transparent "
              : "hover:border-companyBranding font-bold   text-companySecondary shadow-companyBranding bg-transparent  border-b border-companySecondary  p-3"
          )}
        >
          All Coins
        </button>
        <button
          onClick={() => toggle(true)}
          className={classNames(
            tabState
              ? "hover:border-companyBranding font-bold border-b  border-transparent p-3 "
              : "hover:border-companyBranding font-bold   text-companySecondary shadow-companyBranding bg-transparent  border-b border-companySecondary p-3 "
          )}
        >
          Trending
        </button>
      </div>
    </div>
  );
};

export default Tabs;
