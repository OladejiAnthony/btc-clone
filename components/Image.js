import PropTypes from 'prop-types';

const Image = ({ loading = 'lazy', ...props }) => {
  return (
    <img
      {...props}
      loading={loading}
      css={{
        display: 'flex',
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  );
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  loading: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Image;
