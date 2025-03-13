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
            : '#FBFBE6',
      }}
    >
      <div>
        <h2>React & Typescript</h2>
        <h2>Context API</h2>
      </div>

      <button
        onClick={() => {
          if (context.theme === 'dark') {
            context.setTheme('light');
            return;
          } else if (context.theme === 'light') { 
            context.setTheme('dark');
            return;
          } 
        }}
       className='btn btn-center'
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ParentComponent;
