const generateSlug = (text: string): string => {
  return text.split(' ').join('-').toLowerCase();
}

const regenerateSlug = (text: string): string => text.split('-').join(' ')

export {
  generateSlug,
  regenerateSlug,
}
