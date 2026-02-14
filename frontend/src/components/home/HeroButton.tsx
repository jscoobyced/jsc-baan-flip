import { Button } from '../common/Button'

interface HeroButtonProps {
  userType: 'flipper' | 'owner'
  buttonType: 'flipper' | 'owner'
  toggleUserType: (type: 'flipper' | 'owner') => void
  text: string
}

export const HeroButton = ({
  userType,
  buttonType,
  toggleUserType,
  text,
}: HeroButtonProps) => {
  return (
    <Button
      className={`w-52 ${
        userType === buttonType
          ? 'bg-button-primary text-primary-foreground border border-primary-foreground hover:bg-button-primary-hover hover:text-primary'
          : 'bg-button-secondary text-primary-foreground border border-secondary-foreground hover:bg-button-secondary-hover hover:text-primary-foreground'
      }`}
      onClick={() => toggleUserType(buttonType)}
      text={text}
    />
  )
}
