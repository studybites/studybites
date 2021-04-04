import PropTypes from 'prop-types'
import './button.css'

const Button = ({variant, children}) => {
  return (
    <button
      className={`base ${
        variant === 'fill' ? 'fill_button' : 'outline_button'
      }`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['fill', 'outline']).isRequired,
  children: PropTypes.element.isRequired,
}

export default Button
