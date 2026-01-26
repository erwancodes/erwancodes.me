import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Erwan Sagnardon (@erwancodes)

Étudiant en BTS SIO passionné par la tech, l'IA et l'astronomie. Je crée des projets full-stack innovants et partage mon code sur GitHub.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [RSS Feed](/rss.xml)

## Links

- GitHub: [@ErwanExplorer](https://github.com/ErwanExplorer)
- Instagram: [@erwan.code](https://instagram.com/erwan.code)
- LinkedIn: [Erwan Sagnardon](https://www.linkedin.com/in/erwan-sagnardon/)
- Email: erwan.sagnardon@campus-la-chataigneraie.org

---

*This is the markdown-only version of erwancodes.me. Visit [www.erwancodes.me](https://www.erwancodes.me) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
