export const siteConfig = {
  name: "Tom",
  title: "Design Engineer",
  email: "yo@tomm.page",
  birthday: "2010-02-05",
  cdn: "https://cdn.tomm.page",
  links: {
    telegram: "https://t.me/tomm_dev",
    spell: "https://spell.sh",
    x: "https://x.com/tomm_ui",
    x_spell: "https://x.com/spell_ui",
  },
} as const;

export function getAge() {
  const birth = new Date(siteConfig.birthday);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
