import { MainGrid, Box, ProfileRelationsBoxWrapper } from '../src/components';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function ProfileSideBar(props) {
  return (
    <Box >
      <img src={`https://github.com/${props.user}.png`} style={{ borderRadius: '10%'}} alt={props.user}/>
      <hr />
      <p>
      <a className="boxLink" href={`https://github.com/${props.user}`}>
        @{props.user}
      </a>
      </p>
      <hr/>
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const [communities, setCommunities] = useState([{
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'}
  ]);
  const githubuser = 'marssaljr';
  const peopleWhoLiked = [
    'peas',
    'filipedeschamps',
    'omariosouto',
    'juunegreiros',
    'rafaballerini',
    'marcobrunodev',
  ]

  return (
    <>
    <Toaster />
    <AlurakutMenu/>
    <MainGrid>
      <div 
        className="profileArea"
        style={{ gridArea: 'profileArea'}}>
        <ProfileSideBar user={githubuser}/>
      </div>
      <div
        className="postsArea"
        style={{ gridArea: 'postsArea'}}>
        <Box>
          <h1
           className="title">
            Bem-vindo(a) {githubuser}
          </h1>

          <OrkutNostalgicIconSet/>
        </Box>
        <Box>
          <h2 className="subTitle">O que você deseja fazer?</h2>
          <form onSubmit={function handleCreateCommunity(e) {
            e.preventDefault()
            const formData = new FormData(e.target);
            const community = {
              title: formData.get('title'),
              image: formData.get('image')
            }
            if (communities.length < 6) {
              setCommunities([...communities, cummunity]);
            }
            else {
              toast.error('você não pode criar mais que 6 comunidades')
          }
          }}>
            
            <div>
            <input
             placeholder="Qual vai ser o nome da sua comunidade?"
             name="title"
             aria-label="Qual vai ser o nome da sua comunidade?"
             type="text"
            />
            </div>
            <div>
            <input
             placeholder="Coloque uma URL para usar de capa"
             name="image"
             aria-label="Qual vai ser o nome da sua comunidade?"
            />
            </div>
            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div
       className="profileRelationsArea"
       style={{gridArea: 'profileRelationsArea'}}>
         <ProfileRelationsBoxWrapper>
          {<ul>
            {communities.map(
              (i) => {
              return (
                <li>
                  <a
                   href={`/users/${i.title}`}
                   key={i.title}>
                    <img
                     src={i.image}
                     alt={i.title} />
                    <span>
                      {i.title}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
          }
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
        
          <h2 className="smallTitle">
            Pessoas da comunidade ({peopleWhoLiked.length})
          </h2>
          <ul>
            {peopleWhoLiked.map(
              (people) => {
              return (
                <li>
                  <a
                   href={`/users/${people}`}
                   key={people}>
                    <img
                     src={`https://github.com/${people}.png`} 
                     alt={people} />
                    <span>
                      {people}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
