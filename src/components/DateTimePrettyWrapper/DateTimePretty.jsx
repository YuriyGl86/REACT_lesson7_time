import React from "react";

export const DateTimePrettyWrapper = (calc) => (Component) => {
  return class extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    
    render() {
      const date = calc(this.props.date)
      const params = {...this.props, 'date': date}
      return <Component {...params} />;
    }
  };
};
