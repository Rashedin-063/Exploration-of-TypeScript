import Component from './starter/05-challenge'


// const child = <>
// <p>This is a children</p>
// </>  

function App() {
  return (
    <main>
      <h2>React & TypeScript</h2>
     <Component type='basic' name='advanced' />
      <Component type='advanced' name='anna' email='ann@gmail.com' /> 
    </main>
  );
}

export default App;
