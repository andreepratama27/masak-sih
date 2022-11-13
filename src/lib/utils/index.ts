const generateSlug = (text: string): string => {
  return text.split(' ').join('-').toLowerCase();
}

export {
  generateSlug,
}