import { TOGGLE_MODE } from '../../state/actions'
import { useData } from '../../state/useData'
import './header.css'

const Header = () => {
    const { dispatch } = useData()
    return (
        <header>
            <h1>Notes</h1>
            <button className='btn' onClick={() => dispatch({ type: TOGGLE_MODE })}>Toggle Mode</button>
        </header>
    )
}

export default Header