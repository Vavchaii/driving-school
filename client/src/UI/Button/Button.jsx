import classes from './Button.module.css'

const Button = (props) => {
  // Стиль для фона кнопки
  const buttonStyle = {
    background: props.backgroundColor || '#fa9f42', // Если props.backgroundColor не определен, используется значение по умолчанию
  }

  return (
    <button className={classes.btn} style={buttonStyle}>
      {props.children}
    </button>
  )
}

export default Button
