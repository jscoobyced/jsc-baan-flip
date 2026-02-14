interface ButtonProps {
  onClick: () => void
  text: string
  className?: string
}

export const Button = ({ onClick, text, className }: ButtonProps) => {
  return (
    <button
      className={`px-8 py-3 rounded-lg font-medium transition-colors ${className ? className : 'bg-button-primary text-primary-foreground border border-button-primary hover:bg-button-primary-hover hover:text-primary'}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
