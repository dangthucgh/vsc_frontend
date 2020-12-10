const PROJECT_DOMAN = 'localhost';
const PROJECT_SERVICE = `http://${PROJECT_DOMAN}:8080`;

export const eviroment = {
  PROJECT: {
    LOP_HOC: PROJECT_SERVICE + '/lophoc',
    HOC_VIEN: PROJECT_SERVICE + '/hocvien',
  },
  PROJECT_SERVICES: PROJECT_SERVICE,
};
