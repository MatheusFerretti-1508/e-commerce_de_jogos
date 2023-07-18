import { PacmanLoader } from 'react-spinners'

import { cores } from '../../styles'

import { Container } from './styles'

const Loader = () => (
    <Container>
        <PacmanLoader color={cores.branco} />
    </Container>
)

export default Loader