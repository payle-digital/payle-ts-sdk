import axios from 'axios'
import { Payle } from 'payle'

export async function list(
    params: Payle.PayoutListParams,
): Promise<Payle.ApiList<Payle.Payout>> {
    const response = await axios.get(`/v1/payouts?${params}`)
    return response.data
}

export async function retrieve(
    id: string,
    params: Payle.PayoutRetrieveParams,
  ): Promise<Payle.Payout> {
      const response = await axios.get(`/v1/payouts/${id}?${params}`)
      return response.data
  }