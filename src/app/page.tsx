import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const intro: String = "Hey, I'm"
export default function Home() {
  return (
    <main className={`${roboto.className}flex flex-col items-center justify-between p-24 banner`}>
      <div className="bannerText text-outline">
        <p>{intro}</p>
        <h1>Jaehwi Kwon</h1>
        <br></br>
        <p className="text">Austin based software developer with roots in New York</p>
      </div>
    </main>
  )
}
