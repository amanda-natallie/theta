import {useRouter} from "next/router"

export default function Produto() {
  
  const router = useRouter()

return <h1>ID: {router.query.id}</h1>
}