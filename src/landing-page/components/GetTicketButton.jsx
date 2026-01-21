import { Button } from './Button'

export function GetTicketButton({ className = '' }) {
  return (
    <Button href="#pricing" className={className}>
      GET YOUR TICKET
    </Button>
  )
}
