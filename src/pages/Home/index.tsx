import React from 'react'
import './styles.css'
import Sobre from '../../components/sobre'
import Projetos from '../../components/projetos'
import Terminal from '../../components/terminal'
import Skills from '../../components/skills'

const Home = () => {

  return (
    <div id="page-home">
      <div className="content">
        <main>
          <Terminal />
        </main>
        <main>
          <Sobre />
        </main>
        <main>
          <Projetos />
        </main>
        <main>
          <Skills />
        </main>
        <main>
          <br></br>
        </main>
      </div>
    </div>
  )
}

export default Home
