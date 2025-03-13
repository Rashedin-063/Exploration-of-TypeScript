function Component() {
  return (
    <div>
      <h2>Count: 0</h2>
      <h2>Status: Active</h2>

      <div className='btn-container'>
        <button onClick={() => console.log('increment')} className='btn'>
          Increment
        </button>
        <button onClick={() => console.log('decrement')} className='btn'>
          Decrement
        </button>
        <button onClick={() => console.log('reset')} className='btn'>
          Reset
        </button>
      </div>
      <div className='btn-container'>
        <button
          onClick={() => console.log('set status to active')}
          className='btn'
        >
          Set Status to Active
        </button>
        <button
          className='btn'
          onClick={() => console.log('set status to inactive')}
        >
          Set Status to Inactive
        </button>
      </div>
    </div>
  );
}
export default Component;
