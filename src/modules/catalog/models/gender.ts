export enum Gender {
  Male = 'male',
  Female = 'female',
  Unknown = 'unknown',
  NotApplicable = 'n/a',
}

export const getGenderLabel = (gender: Gender) => {
  switch (gender) {
    case Gender.Male:
      return 'Masculino'

    case Gender.Female:
      return 'Feminino'

    case Gender.Unknown:
      return 'Desconhecido'

    case Gender.NotApplicable:
      return 'Não aplicável'
  }
}
