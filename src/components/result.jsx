import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.PureComponent {
  render() {
    const { result, className } = this.props;
    return (<div className={className}>{result}</div>);
  }
}

Result.defaultProps = { result: '0' };

Result.propTypes = { result: PropTypes.string, className: PropTypes.string.isRequired };

export default Result;
