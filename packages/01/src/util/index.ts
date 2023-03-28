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

load((retry) => {
  if (retry)
    retry()
}).then((res) => {
  // eslint-disable-next-line no-console
  console.log(res)
})
