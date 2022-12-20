import React from 'react';

interface ISelectProps {
  value?: string;
}

interface ISelectState {
  value: string;
}

class SortList extends React.Component<ISelectProps, ISelectState> {
  constructor(props: ISelectProps) {
    super(props);
    this.state = { value: 'sorting' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: Event) {
    if (event.target !== null) {
      const eventTarget /*: HTMLSelectElement*/ = event.target as HTMLFormElement;
      this.setState({ value: eventTarget.value });
    }
  }

  handleSubmit(event: Event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <select defaultValue={'default'} /* onChange={this.handleChange} */>
        <option value="default" selected disabled hidden>
          Sort by...
        </option>
        <option value="price-asc">Sort by price ASC</option>
        <option value="price-desc">Sort by price DESC</option>
        <option value="rating-asc">Sort by rating ASC</option>
        <option value="rating-desc">Sort by rating DESC</option>
      </select>
    );
  }
}

export default SortList;

// useful links to understand
// https://devblog.xero.com/typescript-and-react-whats-react-component-p-s-mean-cfddc65f81e1
// https://reactjs.org/docs/forms.html
