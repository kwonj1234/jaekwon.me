import Link from 'next/link'

import Divider from '@/components/Divider'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {

  const projects: {
    title: String,
    url: String,
    imageStyle: String,
    imageDescription: String,
    description: any,
  }[] = [
    {
      title: 'Personal Website V1',
      url: 'https://github.com/kwonj1234/my_website',
      imageStyle: 'my_website-image',
      imageDescription: 'Personal Website V1 screenshot',
      description: `The first version of my personal website! My first task after graduating from Byte Academy was 
      to create my own personal websites to show off all my skills and showcase my style. Deployed using AWS Amplify.`,
    },
    {
      title: 'RecipeDex',
      url: 'https://github.com/kwonj1234/recipedex_frontend',
      imageStyle: 'recipedex-image',
      imageDescription: 'RecipeDex screenshot',
      description: <p>RecipeDex is a web application that provides users a place to scrape recipes
      from the internet and store them for future reference without having to have
      separate accounts for each site the recipe was located in. It uses 
      recipe-scrapers, a python package that uses BeautifulSoup4, to scrape and 
      format recipes from 56 different websites. You can find my contribution to
      the recipe-scrapers tool <Link
        href="https://github.com/hhursev/recipe-scrapers/blob/master/recipe_scrapers/delish.py" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        here
      </Link>.</p>,
    },
    {
      title: 'Pretty City',
      url: 'https://github.com/mbraly01/Pretty_City_Frontend',
      imageStyle: 'prettyCity-image',
      imageDescription: 'Pretty City screenshot',
      description: `A product similar to the Citizen mobile app, PrettyCity used the NYC311 API to give New Yorkers a 
      visual representation of complaints in their area. Using MaterialUI and Google Maps we showed pins on a map that 
      represented all complaints reported to the 311.  Originally envisioned for infrastructure damage, such as potholes 
      or fallen trees, we expanded what users can see and added a filter.`,
    },
  ]



  return (
    <div className='Projects'>
      <div>
        <div className='row justify-center'>
          <h1>Projects</h1>
        </div>
      </div>
      <Divider></Divider>
    </div>
  )
}