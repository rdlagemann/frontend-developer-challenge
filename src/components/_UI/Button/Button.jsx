import React from 'react'
import './Button.css'
import cx from 'classnames'

export default function Button({
  className,
  label,
  children,
  tag = '',
  color = 'primary',
  sm = false,
  outline = false,
  ...restProps
}) {
  const baseClass = cx('Button', className, {
    Button_primary: color === 'primary',
    Button_secondary: color === 'secondary',
    Button_outline: outline,
    Button_small: sm
  })

  if (tag === 'a') {
    return (
      <a className={cx(baseClass, 'Button-link')} {...restProps}>
        {children || label}
      </a>
    )
  }
  return (
    <button className={baseClass} {...restProps}>
      {children || label}
    </button>
  )
}
