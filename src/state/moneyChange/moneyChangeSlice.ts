import { createSlice, type PayloadAction  } from "@reduxjs/toolkit";

export type IncomeCategories = {
    Total: number;
    Salary: number;
    Freelance: number;
    Business: number;
    Investments: number;
    Dividends: number;
    RentalIncome: number;
    Interest: number;
    Pension: number;
    SocialBenefits: number;
    Gifts: number;
    Scholarship: number;
    Royalties: number;
    Grants: number;
    SellingAssets: number;
    SideHustle: number;
  };

  
  export type ExpenseCategories = {
    Total: number;
    Housing: number;
    Food: number;
    Transportation: number;
    Personal: number;
    Health: number;
    Education: number;
    Finance: number;
    Family: number;
    Entertainment: number;
    Travel: number;
  };
  
  type MoneyChange = {
    income: IncomeCategories;
    expense: ExpenseCategories;
  };
  //type IncomeCategory = keyof typeof initialState.income;
  //type ExpenseCategory = keyof typeof initialState.expense;
  
const initialState: MoneyChange= {
    income: {
        Total: 0,
        Salary:0,
        Freelance:0,
        Business:0,
        Investments:0,
        Dividends:0,
        RentalIncome:0,
        Interest:0,
        Pension:0,
        SocialBenefits:0,
        Gifts:0,
        Scholarship:0,
        Royalties:0,
        Grants:0,
        SellingAssets:0,
        SideHustle:0
    },
    expense:{
        Total: 0,
        Housing: 0,
        Food: 0,
        Transportation: 0,
        Personal: 0,
        Health: 0,
        Education: 0,
        Finance: 0,
        Family: 0,
        Entertainment: 0,
        Travel: 0},
}

const moneyChangeSlice = createSlice({
    name: 'moneyChange',
    initialState,
    reducers: {
      income: (state, action: PayloadAction<{ amount: number; category?: keyof typeof initialState.income }>) => {
        const { amount, category } = action.payload;
        state.income.Total += amount;
        //@ts-ignore
        state.income[category] += amount;

      },
      expense: (state, action: PayloadAction<{ amount: number; category?: keyof typeof initialState.expense }>) => {
        const { amount, category } = action.payload;
        state.expense.Total += amount;
        //@ts-ignore
        state.expense[category] += amount;
        
      }, // comma here, if there are more reducers below
    } // no trailing comma here
  });

export const {income, expense} = moneyChangeSlice.actions
export default moneyChangeSlice.reducer