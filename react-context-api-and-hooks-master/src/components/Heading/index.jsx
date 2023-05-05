import { useCounterContext } from '../../contexts/CounterContext';

export const Heading = () => {
  const [state, actions] = useCounterContext();

  return <h1 style={{ fontSize: '30px' }}>{state.counter}</h1>;
};
