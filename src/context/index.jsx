import { createContext, useState } from "react";

export const globalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });
  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransation, setAlltransation] = useState([]);

  const handelFormData = (currentFormData) => {
    if (!currentFormData.description || !currentFormData.amount) return;
    setAlltransation([
      ...allTransation,
      { ...currentFormData, id: Date.now() },
    ]);
  };

  return (
    <globalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransation,
        setAlltransation,
        handelFormData,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
export default GlobalState;
