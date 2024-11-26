import React from "react";
import { ExpenseCategory, IncomeCategory } from "../../types";
import FastfoodIcon from "@mui/icons-material/Fastfood"; //食事アイコン
import AlarmIcon from "@mui/icons-material/Alarm"; //用品アイコン
import AddHomeIcon from "@mui/icons-material/AddHome"; //住居費アイコン
import Diversity3Icon from "@mui/icons-material/Diversity3"; //交際費アイコン
import SportsTennisIcon from "@mui/icons-material/SportsTennis"; //娯楽アイコン
import TrainIcon from "@mui/icons-material/Train"; //交通費アイコン

import WorkIcon from "@mui/icons-material/Work"; //給与アイコン
import AddBusinessIcon from "@mui/icons-material/AddBusiness"; //副収入アイコン
import SavingsIcon from "@mui/icons-material/Savings"; //お小遣いアイコン

const IconComponents: Record<IncomeCategory | ExpenseCategory, JSX.Element> = {
  食費: <FastfoodIcon fontSize="small" />,
  日用品: <AlarmIcon fontSize="small" />,
  住居費: <AddHomeIcon fontSize="small" />,
  交際費: <Diversity3Icon fontSize="small" />,
  娯楽: <SportsTennisIcon fontSize="small" />,
  交通費: <TrainIcon fontSize="small" />,
  給与: <WorkIcon fontSize="small" />,
  副収入: <AddBusinessIcon fontSize="small" />,
  お小遣い: <SavingsIcon fontSize="small" />,
};

export default IconComponents;
