export const languages = {
  en: "English",
  fr: "Français",
};

export const defaultLang = "en";

const sideMenuObj = {
  en: {
    home: "Home",
    project: "Project",
    blog: "blog",
    cv: "CV",
    contact: "contact",
  },
  kr: {
    home: "홈",
    project: "프로젝트",
    blog: "블로그",
    cv: "CV",
    contact: "연락하기",
  },
} as const;

export function useMenuTranslator(lang: keyof typeof sideMenuObj) {
  return function menuTranslator(
    key: keyof (typeof sideMenuObj)[typeof defaultLang]
  ) {
    return sideMenuObj[lang][key] || sideMenuObj[defaultLang][key];
  };
}
