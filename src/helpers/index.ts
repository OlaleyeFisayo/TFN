export function convertToObject(arr) {
  const result = {}
  for (let i = 0; i < arr.length; i++) {
    const { tag, value } = arr[i]
    let parsedValue = value
    result[tag] = parsedValue
  }
  return result
}

export function checkValues(arr) {
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].value === null || arr[i].value === '') {
        return true
      }
    }
    return false
  }
}

export const isFormComplete = (formObject) => Object.values(formObject).some((v) => !v)

export const isPasswordSame = (form) => {
  const { value: pValue } = form.find((value) => value.tag === 'password')
  const { value: cpValue } = form.find((value) => value.tag === 'confirmPassword')
  return pValue === cpValue
}

export const changeValueOfObject = (value) => {
  return value.toLowerCase().replace(/\s+/g, '_').replace(/\//g, '_')
}
