import { useLazyGetCryptosQuery } from "../../services/cryptoApi";

function useFetchCoin(offset) {
    const maxNumberOfCoinsToFetch = 10;
    // console.log(offset, "get")

    let { data: currencies, isSuccess, isLoading } =  useLazyGetCryptosQuery({
      limit: maxNumberOfCoinsToFetch,
      offset: offset,
    })
    console.log(currencies)

    currencies = currencies?.data?.coins
    return {currencies, isSuccess}
  }

  export default useFetchCoin