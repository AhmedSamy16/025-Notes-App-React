import { MdSearch } from "react-icons/md"
import { useData } from "../../state/useData"
import { INPUT_TEXT } from "../../state/actions"
import "./form.css"

const Form = () => {
    const { data, dispatch } = useData()
    return (
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input 
                type="text" 
                placeholder="Type to search..." 
                value={data.searchText} 
                onChange={(e) => dispatch({ type: INPUT_TEXT, payload: { text: e.target.value } })}
            />
        </div>
    )
}

export default Form