import { RGB } from 'common/types'

export const formatNumber = (value: number) => {
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  if (value >= 1_000) {
    return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return value
}

export const formatPercent = (value: number) => `${value.toFixed(1)}%`

export const formatUsername = (username: string) =>
  username[0] === '@' ? username : `@${username}`

export const rgbFromScale = (weight: number, ...colors: RGB[]) => {
  const step = 1 / (colors.length - 1)

  let prev = 0
  let index = 0

  for (let i = 0; i < colors.length; i++) {
    if (weight >= prev && weight <= prev + step) {
      index = i
      break
    }
    prev += step
  }

  const color2 = colors[index]
  const color1 = colors[index + 1]

  const newMin = index * step
  const newMax = (index + 1) * step
  const ratio = (weight - newMin) / (newMax - newMin)

  const w1 = ratio
  const w2 = 1 - w1
  return `rgb(${Math.round(color1[0] * w1 + color2[0] * w2)} ${Math.round(
    color1[1] * w1 + color2[1] * w2
  )} ${Math.round(color1[2] * w1 + color2[2] * w2)})`
}

export const clipboard = (typeof navigator !== 'undefined'
  ? navigator.clipboard
  : null) || {
  async writeText(value: string) {
    // Create a textarea element and hide it
    const textAreaElem = document.createElement('textarea')
    textAreaElem.style.cssText = `
            opacity: 0;
            position: fixed;
            top: 50%;
        `

    // Set its value to what we want to copy
    textAreaElem.value = value

    // Stick it in the DOM
    document.body.appendChild(textAreaElem)

    // Use its native select method
    textAreaElem.select()

    // Copy that stuff to the clipboard!
    console.log(document.execCommand('copy'))

    // Remove it again
    document.body.removeChild(textAreaElem)

    return await Promise.resolve()
  },
}
