export default function scrollToErrors(errorClassSelector) {
    setTimeout(
      () =>
        document.querySelector(`${errorClassSelector}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }),
      0
    )
  }