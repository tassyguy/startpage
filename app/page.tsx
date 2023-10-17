import Image from 'next/image'
import styles from './page.module.css'
import SearchBox from '@/components/searchBox/searchBox'
import searchEngines from '../data/searchEngines.json'
import Time from '@/components/time/time'

export default function Home() {
  return (
    <main>
      <p>Welcome to Simon land!</p>
      <Time/>
      <SearchBox searchEngine={'Google'}/>
      <ul>
        <li>Favorites</li>
        <li>List</li>
        <li>Here</li>
      </ul>
    </main>
  )
}
