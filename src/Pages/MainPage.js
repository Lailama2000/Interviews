import React from 'react'
import Intro from '../Component/Intro'
import Services from '../Component/Services'
import Features from '../Component/Features'
import Reviews from '../Component/Reviews'
import Video from '../Component/Video'
import Faqs from '../Component/Faqs'

export default function MainPage() {
  return (
    <div>
      <Intro />
      <Services />
      <Features />
      <Reviews />
      <Video />
      <Faqs />
    </div>
  )
}
