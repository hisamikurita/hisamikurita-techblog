export const generateCardPreview = (href: string) => {
  const url = new URL(href);
  const domain = url.hostname.replace("www.", "").replace(/\.(com|dev|io|org|net)$/, "");

  return `
    <a href="${href}" target="_blank" rel="noopener noreferrer" class="generate-card-preview">
      <img src="/images/${domain}-preview.jpg" alt="" />
      <span>${href}</span>
    </a>
    `;
};
