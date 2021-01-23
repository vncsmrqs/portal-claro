import http from "@/plugins/http";
import plansMock from "@/mocks/plans";

const baseUrl = "https://54.232.155.178/rw-middleware/v1";
const headers = {
  "x-application-key": "c1b8a35060ca0135379e000d3ac06d76",
  "x-application-id": "ac76a7739985cdacad94eecd7f04ff64a97e0e93",
  "x-app-version": "1.81.9999.1-dev",
  "x-platform": "Android",
  "x-channel-id": "6062f134-b4b1-41db-98ad-c3b289fed970",
  "Accept-language": "pt-BR",
  "x-organization-slug": "claro",
  "x-platform-version": "Android SDK: 29 (10)",
  "x-uid": "61e1c030-575a-11eb-883c-0a81178671bc",
  Host: "clarogateway.flexdev.aws.clarobrasil.mobi"
};

const api = http(baseUrl, headers);

const getAll = () => {
  const body = {
    resources: [
      {
        resource: "catalogValidity",
        with: {
          filter: {
            customer: {
              tags: [{ tag: "join" }]
            },
            exclusiveProfile: true,
            mergeCatalogs: true
          }
        }
      }
    ]
  };

  //Remover o then e o catch em quando api estiver pronta
  return api
    .post("/query", body)
    .then(data => Promise.resolve(data))
    .catch(() => Promise.resolve(plansMock));
};

export default {
  getAll
};
