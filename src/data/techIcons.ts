const techIconMap: Record<string, string> = {
  python: "https://icon.icepanel.io/Technology/svg/Python.svg",
  django: "https://icon.icepanel.io/Technology/svg/Django.svg",
  djangorest: "https://icon.icepanel.io/Technology/svg/Django-REST.svg",
  djangorestframework: "https://icon.icepanel.io/Technology/svg/Django-REST.svg",
  drf: "https://icon.icepanel.io/Technology/svg/Django-REST.svg",
  celery: "https://cdn.simpleicons.org/celery",
  postgresql: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
  postgres: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
  redis: "https://icon.icepanel.io/Technology/svg/Redis.svg",
  docker: "https://icon.icepanel.io/Technology/svg/Docker.svg",
  aws: "https://icon.icepanel.io/Technology/svg/AWS.svg",
  react: "https://icon.icepanel.io/Technology/svg/React.svg",
  typescript: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
  vite: "https://icon.icepanel.io/Technology/svg/Vite.svg",
  tailwind: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  tailwindcss: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  recharts: "https://cdn.simpleicons.org/recharts",
  jwt: "https://cdn.simpleicons.org/jsonwebtokens/ffffff",
  pandas: "https://icon.icepanel.io/Technology/svg/Pandas.svg",
  reportlab: "https://cdn.simpleicons.org/reportlab",
  matplotlib: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg",
  openapi: "https://cdn.simpleicons.org/openapiinitiative",
  restapi: "https://cdn.simpleicons.org/openapiinitiative",
  swagger: "https://icon.icepanel.io/Technology/svg/Swagger.svg",
  tensorflow: "https://icon.icepanel.io/Technology/svg/TensorFlow.svg",
  keras: "https://icon.icepanel.io/Technology/svg/Keras.svg",
  opencv: "https://icon.icepanel.io/Technology/svg/OpenCV.svg",
  jupyter: "https://icon.icepanel.io/Technology/svg/Jupyter.svg",
  colab: "https://cdn.simpleicons.org/googlecolab",
  mysql: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
  heroku: "https://icon.icepanel.io/Technology/svg/Heroku.svg",
  git: "https://icon.icepanel.io/Technology/svg/Git.svg",
  rstudio: "https://cdn.simpleicons.org/rstudio",
  cloud: "https://cdn.simpleicons.org/cloudflare",
  minio: "https://cdn.simpleicons.org/minio",
  hmac: "https://cdn.simpleicons.org/keycdn",
};

const normalizeTechName = (name: string) =>
  name
    .toLowerCase()
    .replace(/\+/g, "plus")
    .replace(/[^a-z0-9]/g, "")
    .trim();

export const getTechIconUrl = (name: string) => {
  const key = normalizeTechName(name);
  if (!key) return null;

  if (key.includes("swagger") || key.includes("openapi")) {
    return techIconMap.openapi;
  }

  if (key.includes("djangorest")) {
    return techIconMap.djangorest;
  }

  return techIconMap[key] ?? null;
};
