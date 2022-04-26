function showLog(): void {
  console.log('has Error !!!')
}

function sum(a: number, b: number): number {
  return a + b
}

console.log(sum(1, 2))

function returnArray(): string[] {
  return ['abc']
}

function unknown(): any {
  return 'unknown'
}
