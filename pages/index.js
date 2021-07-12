import { MainGrid, Box } from '../src/components';

export default function Home() {
  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <Box >
          <img src="https://github.com/marssaljr.png"/>
        </Box>
      </div>
      <div className="postsArea" style={{ gridArea: 'postsArea'}}>
        <Box>
          Bem-vindo
        </Box>
      </div>
      <div className="profileRelationsArea"  style={{gridArea: 'profileRelationsArea'}}>
        <Box>
          Comunidades
        </Box>
      </div>
    </MainGrid>
  )
}
