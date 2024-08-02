import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
    const [trainings, setTrainings] = useState([
        {
            trainingType: 'Dressage',
            selectedDate: new Date(),
            horse: 'Spirit',
            location: 'Stable 1',
            trainer: 'John Doe'
        },
        {
            trainingType: 'Jumping',
            selectedDate: new Date(),
            horse: 'Lightning',
            location: 'Stable 2',
            trainer: 'Jane Doe'
        }
    ]);

    const handleSaveTraining = (training) => {
        setTrainings((prevTrainings) => [...prevTrainings, training]);
    };

    return (
        <AppContext.Provider value={{ trainings, handleSaveTraining }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
