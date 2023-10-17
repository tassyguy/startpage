'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Time from '@/components/time/time'
import SearchBox from '@/components/search/searchBox'
import Bookmarks from '@/components/bookmarks/bookmarks'
import searchEngines from '../data/searchEngines.json'
import ThemeSwitcher from '@/components/themeSwitcher/themeSwitcher'

export default function Home() {
  const themes = ['purple', 'pink'];
  return (
    <main>
      <p>Welcome to Simon land!</p>
      <Time/>
      <SearchBox searchEngines={searchEngines}/>
      <Bookmarks/>
      <ThemeSwitcher themes={themes} />
    </main>
  )
}
