class StudyGeneric {
  static printArr<T>(params: T[]): void {
    console.log(params)
  }
}

StudyGeneric.printArr<number>([1, 2, 3, 4])
StudyGeneric.printArr<string>(['a', 'b', 'c', 'd'])
StudyGeneric.printArr<boolean>([true, false])
StudyGeneric.printArr<any>([true, false, 1, 'a', undefined, null])
