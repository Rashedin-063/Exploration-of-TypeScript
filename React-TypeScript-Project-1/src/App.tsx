import Component from './starter/02-props'


const child = <>
<p>This is a children</p>
</>

function App() {
  return (
    <main>
      <Component name='peter' id={123} children={child} />
    </main>
  );
}

export default App;
