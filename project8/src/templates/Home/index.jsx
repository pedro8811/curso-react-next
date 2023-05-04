/* eslint-disable react/prop-types */
import { Component, useEffect, useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <p {...s}>Algo deu errado</p>;
    }

    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) {
      throw new Error('Que chato!');
    }
  }, [counter]);

  return (
    <div>
      <button {...s} onClick={() => setCounter((s) => s + 1)}>
        Click to increase {counter}
      </button>
    </div>
  );
};

export const Home = () => {
  return (
    <div>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
      <MyErrorBoundary>
        <ItWillThrowError />
      </MyErrorBoundary>
    </div>
  );
};
