export const statusCheck = (status: string) => {
  if (status === 'Alive') {
    return 'green';
  }

  if (status === 'Dead') {
    return 'red';
  }

  return 'grey'
}