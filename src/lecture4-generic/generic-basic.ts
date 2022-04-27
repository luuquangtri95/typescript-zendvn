function showNumberInfo(x: number): number {
  return 1
}

function showStringInfo(x: string): string {
  return x
}

function showInfo<T>(x: T): T {
  return x
}

showInfo<number>(123)
showInfo<boolean>(true)
showInfo<string>('123')
showInfo<number[]>([123])
