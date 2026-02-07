import { Button } from './Button'

export function GetTicketButton({ className = '' }) {
  const classes = ['pill--gradient', className].filter(Boolean).join(' ')
  return (
    <Button href="#pricing" className={classes}>
      Make My Ads Print Money
    </Button>
  )
}
