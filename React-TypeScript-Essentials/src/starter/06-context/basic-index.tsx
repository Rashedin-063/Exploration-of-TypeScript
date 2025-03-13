import { ThemeProvider, useTheme } from "./basic-context";



function ParentComponent() {
  // return
  //   <Component/>
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
 
}

function Component() {

  const context = useTheme()
  console.log('hello context', context);
  

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
    </div>
  );
}

export default ParentComponent;
