/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box } from "@mui/material";
import React from "react";
import MonthlySummary from "../components/MonthlySummary";
import Calender from "../components/Calender";
import TransactionMenu from "../components/TransactionMenu";
import TransactionFrom from "../components/TransactionFrom";
import { Transaction } from "../types";

interface HomeProps {
  monthlyTransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}

const Home = ({ monthlyTransactions, setCurrentMonth }: HomeProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* 左側コンテンツ */}
      <Box sx={{ flexGrow: 1 }}>
        <MonthlySummary monthlyTransactions={monthlyTransactions} />
        <Calender
          monthlyTransactions={monthlyTransactions}
          setCurrentMonth={setCurrentMonth}
        />
      </Box>
      {/* 右側コンテンツ */}
      <Box>
        <TransactionMenu />
        <TransactionFrom />
      </Box>
    </Box>
  );
};

export default Home;
