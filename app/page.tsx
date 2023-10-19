'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Time from '@/components/time/time'
import SearchBox from '@/components/search/searchBox'
import Bookmarks from '@/components/bookmarks/bookmarks'
import searchEngines from '../data/searchEngines.json'
import ThemeSwitcher from '@/components/themeSwitcher/themeSwitcher'
import Weather from '@/components/weather/weather'

export default function Home() {
  {/*const themes = ['purple', 'pink'];*/}
  return (
    <main>
      <Time/>
      <SearchBox searchEngines={searchEngines}/>
      <Weather/>
      <Bookmarks/>
     {/* <ThemeSwitcher themes={themes} /> */}
    </main>
  )
}
