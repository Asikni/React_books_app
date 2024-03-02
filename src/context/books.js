import { createContext, useState } from 'react';

const BooksContext = createContext();

function Provider({children}) {  //children the app component that we pass??
    const [count, setCount ] = useState(5)
    const valueToShare = {
        count, 
        incrementCount : () => {
            setCount(count + 1);
        }
    }
    return (<BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
    );
}

export {Provider};
export default BooksContext;