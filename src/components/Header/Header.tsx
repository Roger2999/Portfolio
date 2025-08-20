import { Desktop } from './Desktop/Desktop'
import { useState } from 'react'
import { Mobile } from './Mobile/Mobile'
// ...existing code...
export const Header = ()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const handleMenuOpen = ()=> {
    setMobileMenuOpen(true)
  }
  const handleMenuClose = ()=> {
    setMobileMenuOpen(false)
  }
  return (
    <header className="bg-white">
      <Desktop onMenuOpen={handleMenuOpen} />
      <Mobile mobileMenuOpen={mobileMenuOpen} onMenuClose={handleMenuClose} />
    </header>
  )
}