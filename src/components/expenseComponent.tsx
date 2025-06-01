import React from 'react'

type Props = {
    children: React.ReactNode;
  };

const expenseComponent = ({children}: Props) => {
  return (
    <div>
        <button>{children}</button></div>
  )
}

export default expenseComponent
