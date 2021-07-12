import { MainGrid, Box, ProfileRelationsBoxWrapper } from '../src/components';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

function ProfileSideBar(props) {
  return (
    <Box >
      <img src={`https://github.com/${props.user}.png`} style={{ borderRadius: '10%'}}/>
    </Box>
  )
}
export default function Home() {
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
    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <ProfileSideBar user={githubuser}/>
      </div>
      <div className="postsArea" style={{ gridArea: 'postsArea'}}>
        <Box>
          <h1 className="title">
            Bem-vindo(a) {githubuser}
          </h1>

          <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div className="profileRelationsArea"  style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Pessoas da comunidade ({peopleWhoLiked.length})</h2>
          <ul>
            {peopleWhoLiked.map((people) => {
              return (
                <li>
                  <a href={`/users/${people}`} key={people}>
                    <img src={`https://github.com/${people}.png`} alt={people} />
                    <span>{people}</span>
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
