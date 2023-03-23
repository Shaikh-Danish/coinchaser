import { useGetCryptoNewsQuery } from "../../services/newsApi"

function News() {
  const { data, isSuccess } = useGetCryptoNewsQuery()

  if (isSuccess) {
    console.log(data)
  }

  return (
    <div>News</div>
  )
}

export default News