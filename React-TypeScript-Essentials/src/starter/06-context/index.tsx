import { ThemeProvider, useTheme } from './context';

function ParentComponent() {
  // return
  //   <Component/>
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log('hello context', context);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        border: '2px solid rebeccapurple',
        backgroundColor:
          context.theme === 'dark'
            ? '#ccc'
            : context.theme === 'light'
            ? '#F6F6F6'
            : '#FBFBE6',
      }}
    >
      <div>
        <h2>React & Typescript</h2>
        <h2>Context API</h2>
      </div>

      <button
        style={{
          padding: '8px 24px',
          borderRadius: '4px',
          backgroundColor: '#0000ff',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ParentComponent;
