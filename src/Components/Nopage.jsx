const Nopage = () => {
    return <h1>404</h1>;
};

export default Nopage;

// import { useState, useEffect } from 'react';

// const useTheme = () => {
//     const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//     useEffect(() => {
//         document.documentElement.setAttribute('data-theme', theme);
//         localStorage.setItem('theme', theme);
//     }, [theme]);

//     const toggleTheme = () => {
//         setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//     };

//     return [theme, toggleTheme];
// };

// export default useTheme;

// import React from 'react';
// import useTheme from './useTheme';

// const App = () => {
//     const [theme, toggleTheme] = useTheme();

//     return (
//         <div>
//             <button onClick={toggleTheme}>
//                 Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//             </button>
//             {/* Rest of your portfolio */}
//         </div>
//     );
// };

// export default App;

// :root[data-theme='light'] {
//     --background-color: #ffffff;
//     --text-color: #000000;
// }

// :root[data-theme='dark'] {
//     --background-color: #000000;
//     --text-color: #ffffff;
// }

// body {
//     background-color: var(--background-color);
//     color: var(--text-color);
// }
