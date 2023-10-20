import Link from 'next/link'

import Divider from '@/components/Divider'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {

  const projects: {
    id: number,
    title: String,
    url: String,
    image: String,
    imageDescription: String,
    description: any,
  }[] = [
    {
      id: 1,
      title: 'Personal Website V1',
      url: 'https://github.com/kwonj1234/my_website',
      image: '/images/my_website.png',
      imageDescription: 'Personal Website V1 screenshot',
      description: `The first version of my personal website! My first task after graduating from Byte Academy was 
      to create my own personal websites to show off all my skills and showcase my style. Deployed using AWS Amplify.`,
    },
    {
      id: 2,
      title: 'RecipeDex',
      url: 'https://github.com/kwonj1234/recipedex_frontend',
      image: '/images/recipedex_screenshot.jpg',
      imageDescription: 'RecipeDex screenshot',
      description: <p>RecipeDex is a web application that provides users a place to scrape recipes
      from the internet and store them for future reference without having to have
      separate accounts for each site the recipe was located in. It uses 
      recipe-scrapers, a python package that uses BeautifulSoup4, to scrape and 
      format recipes from 56 different websites. You can find my contribution to
      the recipe-scrapers tool <Link
        className='text-blue-500'
        href="https://github.com/hhursev/recipe-scrapers/blob/master/recipe_scrapers/delish.py" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        here
      </Link>.</p>,
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
      <div className='project-section'>
        {
          projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              url={project.url}
              image={project.image}
              imageDescription={project.imageDescription}
              description={project.description}
            ></ProjectCard>
          ))
        }
      </div>
    </div>
  )
}