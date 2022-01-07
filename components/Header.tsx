import Link from 'next/link'

import { Nav } from '@jhon-acasa/components.blocks.nav'
import { Logo } from '@jhon-acasa/components.ui.icons'
import { Button } from '@jhon-acasa/components.ui.button'

type Props = {
  menuOptions?: Array<{ title: string; link: string }>
}

export const Header = ({ menuOptions }: Props) => {
  return (
    <Nav>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <div>
        {menuOptions &&
          menuOptions.map((item) => {
            return (
              <Link href={item.link} key={item.title} passHref>
                {item.title}
              </Link>
            )
          })}
      </div>

      <div>
        <p>Aplica sin costo que nosotros hacemos lo demás.</p>
        
            <Button text="Aplica ahora" composition="primary"></Button>
      
      </div>
    </Nav>
  )
}
