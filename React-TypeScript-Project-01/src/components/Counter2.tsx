import { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode
};


const Counter2 = ({setCount, children}: CounterProps) => {
 
  return (
    <div>
      {/* <h1>Count is {count}</h1> */}
      <h1>{children}</h1>
      <div
        style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        <button
          style={{
            padding: '0 20px',
            borderRadius: '8px',
            backgroundColor: 'yellowgreen',
          }}
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <button
          style={{
            padding: '0 20px',
            borderRadius: '8px',
            backgroundColor: 'violet',
          }}
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
export default Counter2