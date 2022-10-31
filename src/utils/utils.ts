export const statusCheck = (status: string) => {
  if (status === 'Alive') {
    return 'green';
  }

  if (status === 'Dead') {
    return 'red';
  }

  return 'grey'
}

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number,
): (...args: Params) => void {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}
