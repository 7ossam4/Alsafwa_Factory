import { useTranslation } from "react-i18next";

const Home = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };
  return (
    <>
    <button onClick={() => changeLanguage("en")}>
        English
      </button>

      <button onClick={() => changeLanguage("ar")}>
        العربية
      </button>

      <h2>{t("home")}</h2>

      <h1>{t("welcome")}</h1>
    </>
  )
}

export default Home
