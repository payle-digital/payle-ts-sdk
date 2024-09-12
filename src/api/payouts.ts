import axios from 'axios'
import { Payle } from 'payle'

export async function list(
  params: Payle.PayoutListParams,
): Promise<Payle.ApiList<Payle.Payout>> {
  const query = new URLSearchParams()
  if (params.limit) query.append('limit', params.limit.toString())
  if (params.ending_before) query.append('ending_before', params.ending_before)
  if (params.starting_after)
    query.append('starting_after', params.starting_after)

  if (params.relations && params.relations.length > 0) {
    query.append('relations', params.relations.join(','))
  }

  const response = await axios.get(`/v1/payouts?${query}`)
  return response.data
}

export async function retrieve(
  id: string,
  params: Payle.PayoutRetrieveParams,
): Promise<Payle.Payout> {
  const query = new URLSearchParams()

  if (params.relations && params.relations.length > 0) {
    query.append('relations', params.relations.join(','))
  }
  const response = await axios.get(`/v1/payouts/${id}?${query}`)
  return response.data
}
