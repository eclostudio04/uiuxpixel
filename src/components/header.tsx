import MainNav from '@/components/mainNav'
import MobileNav from '@/components/mobileNav'
import {Button} from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 w-full">
      <div className="h-auto container flex items-center justify-between py-2">
          <div>
            {/* {Dekstop} */}
            <MainNav />

            {/* {Mobile} */}
            <MobileNav />
          </div>
      
          {/* {Dekstop & Mobile} */}
          <Button >
            Lets Talk
          </Button>
      </div>
    </header>
  )
}
