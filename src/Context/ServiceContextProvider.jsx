import { ServiceContext } from "./ServiceContext";

import {
  FaIdCard,
  FaCalculator,
  FaFileInvoiceDollar,
  FaHouse,
  FaFileInvoice,
  FaScaleBalanced,
} from "react-icons/fa6";

export const ServiceContextProvider = ({ children }) => {
  const services = [
    {
      id: 1,
      title: "NTN Registration",
      icon: FaIdCard,
      description:
        "Get your National Tax Number (NTN) registered quickly and hassle-free. We handle the complete registration process for you.",
    },

    {
      id: 2,
      title: "Accounting & Bookkeeping",
      icon: FaCalculator,
      description:
        "Keep your financial records accurate and organized with reliable accounting and bookkeeping services.",
    },

    {
      id: 3,
      title: "Income Tax Return Filing",
      icon: FaFileInvoiceDollar,
      description:
        "We prepare and file your income tax returns accurately and on time to help you stay compliant.",
    },

    {
      id: 4,
      title: "Property Tax Services",
      icon: FaHouse,
      description:
        "Get professional assistance with property tax assessment, filing, and compliance.",
    },

    {
      id: 5,
      title: "Sales Tax Registration",
      icon: FaFileInvoice,
      description:
        "Get registered for sales tax and stay compliant with applicable regulations and requirements.",
    },

    {
      id: 6,
      title: "Legal Consultancy",
      icon: FaScaleBalanced,
      description:
        "Receive professional legal guidance on tax matters, business requirements, and financial compliance.",
    },
  ];

  return (
    <ServiceContext.Provider value={{ services }}>
      {children}
    </ServiceContext.Provider>
  );
};