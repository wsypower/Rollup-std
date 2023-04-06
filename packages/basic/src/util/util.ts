/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-03-27 13:05:44
 * @LastEditTime: 2023-03-28 13:14:15
 * @LastEditors: wsy
 */
export const add = (a: number, b: number): number => a + b

export const multi = (a: number, b: number): number => a * b

function fetch(): Promise<unknown> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const error = new Error('Fetching')
      resolve(123)
    }, 1000)
  })
}
type OnError = (resolve: (value?: any) => any, reject: (reason?: any) => any) => void

function load(onError: OnError): Promise<unknown> {
  const p = fetch()
  return p.catch((err: any) => {
    return new Promise((resolve, reject) => {
      const retry = () => resolve(load(err))
      const fail = () => reject(err)
      onError(retry, fail)
    })
  })
}
