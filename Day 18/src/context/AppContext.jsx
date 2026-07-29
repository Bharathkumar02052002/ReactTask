import { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext(null);

const user = {
  name: 'Sudhan',
  email: 'sudhan@gmail.com',
  role: 'Trainer',
};

const products = [
  { id: 1, title: 'Laptop', price: 50000 },
  { id: 2, title: 'Mobile', price: 20000 },
];

const students = [
  { id: 1, name: 'Sudhan', course: 'MERN' },
  { id: 2, name: 'Ravi', course: 'React' },
];

const cart = [
  { id: 1, product: 'Laptop', qty: 2 },
  { id: 2, product: 'Mouse', qty: 1 },
];

const dashboard = {
  totalStudents: 250,
  totalCourses: 15,
  totalPlacements: 120,
};

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const value = useMemo(() => {
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);

    return {
      user,
      products,
      theme,
      setTheme,
      students,
      cart,
      cartCount,
      dashboard,
    };
  }, [theme]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }

  return context;
}
