
export type CounterState = {
  count: number;
  status: string
}

export const initialState : CounterState = {
  count: 0,
  status: 'Pending'
}

type UpdateCountAction = {
  type: 'increment' | 'decrement' |'reset'
}

type CounterAction = UpdateCountAction;

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
switch (action.type) {
  case 'increment':
    return {...state, count: state.count + 1}
  case 'decrement':
    return {...state, count: state.count - 1}
  case 'reset':
    return {...state, count: 0}

  default:
   return state;
}
}