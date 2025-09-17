import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Products',
  icon: 'i-lucide-folder',
  to: '/products'
}, {
  label: 'Gallery',
  icon: 'i-lucide-file-text',
  to: '/gallery'
}, {
  label: 'About',
  icon: 'i-lucide-user',
  to: '/about'
}]
