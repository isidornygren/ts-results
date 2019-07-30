import * as React from 'react';
import {
  HTMLProps,
  MouseEvent,
  PureComponent,
  ReactElement,
  TouchEvent,
} from 'react';
import * as ReactDOM from 'react-dom';

interface ChildProps {
  name: string;
}

interface TestProps extends HTMLProps<HTMLDivElement> {
  className: string;
}

const Child = ({ name }: ChildProps): ReactElement<any> => (
  <p>Hello, {name}!</p>
);

class Test extends PureComponent<TestProps, {}> {
  public constructor(props: TestProps) {
    super(props);

    this.boundMethod1 = (event: TouchEvent<HTMLDivElement>) => {
      event.preventDefault();
    };
  }

  public render() {
    return (
      <div
        className="test"
        style={{ width: 100 }}
        onTouchStart={this.boundMethod1}
        onClick={this.boundMethod2}
      >
        <Child name="World" />
        {[
          <div key={0} />,
          <div key={1} />,
          <div key={2} />,
          <div key={3} />,
          <div key={4} />,
        ]}
      </div>
    );
  }

  private boundMethod1(event: TouchEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  private boundMethod2 = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
}

ReactDOM.render(<Test className="test" />, document.getElementById('test'));
