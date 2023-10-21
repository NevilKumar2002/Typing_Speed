import { createContext, useContext, useState } from "react";

const TestModeContest= createContext();

export const TestModeContestProvider =({children})=>{

    const [testTime, setTestTime]= useState(15);
    const values={
        testTime,
        setTestTime
    }

    return (<TestModeContest.Provider value={values}>{children}</TestModeContest.Provider>)
}
export const useTestMode =()=> useContext(TestModeContest);