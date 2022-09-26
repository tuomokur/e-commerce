import { Input } from "@chakra-ui/react";

const InputComponent = ({type, placeholder, value, user, userKey, setUser}) => {
    const onChange = (e) => {
        const value = e.target.value
        setUser({...user, [userKey]: value})
    }
    return(
        <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    ) 
}
export default InputComponent