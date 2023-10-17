import Image from 'next/image'
import styles from './page.module.css'
import Time from '@/components/time/time'
import SearchBox from '@/components/search/searchBox'
import Bookmarks from '@/components/bookmarks/bookmarks'

export default function Home() {
  return (
    <main>
      <p>Welcome to Simon land!</p>
      <Time/>
      <SearchBox/>
      <Bookmarks/>
    </main>
  )
}
