export const generateCardPreview = (href: string) => {
  return `
    <a href="${href}" target="_blank" rel="noopener noreferrer" class="generate-card-preview">
      <img src="/images/github-preview.jpg" alt="" />
      <span>${href}</span>
    </a>
    `;
};
