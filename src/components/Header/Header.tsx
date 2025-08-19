import { Desktop } from './Desktop/Desktop'
import { useState } from 'react'
import { Mobile } from './Mobile/Mobile'
export interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const Header = ()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  return (
    <header className="bg-white">
      <Desktop mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Mobile mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </header>
  )
}