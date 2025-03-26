import React, { createContext } from "react";

export const Context = createContext();

export const AppProvider = ({ children }) => {
    const industriesArray = [
        "Accountancy",
        "Banking",
        "Corporate Finance",
        "Dexta Launch Industry 1",
        "Farzan Code",
        "Farzan Meta",
        "Hedge Funds",
        "Investment Banking",
        "Module not creating industry",
        "Private Equity",
        "test",
        "test 1",
        "test 2",
        "test 4",
        "Venture Capital",
      ];

      
      const formattedIndustries = industriesArray.map(industry => ({
        value: industry.toLowerCase(),
        label: industry,
      }));
      const roles = [
        "Corporate Banking Operations Manager",
        "Customer Experience Analyst",
        "Customer Service Operations Specialist",
        "Customer Service Representative (CSR)",
        "Farzan Meta J1",
        "Financial Services Advisor",
        "Job",
        "New",
        "Operations Analyst",
        "Personal Banking Officer",
        "Relationship Manager",
        "Test Module Deleted X",
      ];
      const formattedRoles = roles.map(roles => ({
        value: roles.toLowerCase(),
        label: roles,
      }));

  return (
    <Context.Provider value={{ formattedIndustries ,formattedRoles}}>
      {children}
    </Context.Provider>
  );
};
